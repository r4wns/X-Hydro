document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            title: "X-HYDRO",
            description1: "X-HYDRO is a school project based on a realization on a Wi-Fi Controlled Boat.",
            description2: "It was created by the X-Hydro Development Team.",
            startButton: "Launch the Controller"
        },
        ua: {
            title: "X-HYDRO",
            description1: "X-HYDRO - це шкільний проєкт на основі реалізації Wi-Fi керованого човна.",
            description2: "Він був створений командою розробників X-Hydro.",
            startButton: "Запустити контролер"
        }
    };

    let currentLanguage = 'en';

    // Function to change the text based on language
    function setLanguage(language) {
        document.getElementById('title').textContent = translations[language].title;
        document.getElementById('description1').textContent = translations[language].description1;
        document.getElementById('description2').textContent = translations[language].description2;
        document.getElementById('startButton').textContent = translations[language].startButton;
    }

    // Event listener for the language button to toggle the dropdown
    document.getElementById("languageButton").addEventListener("click", function () {
        const dropdown = document.getElementById("languageDropdown");
        dropdown.classList.toggle("show");
    });

    // Event listeners for selecting a language
    document.getElementById("enButton").addEventListener("click", function () {
        currentLanguage = 'en';
        setLanguage(currentLanguage);
        document.getElementById("languageDropdown").classList.remove("show"); // Close dropdown
    });

    document.getElementById("uaButton").addEventListener("click", function () {
        currentLanguage = 'ua';
        setLanguage(currentLanguage);
        document.getElementById("languageDropdown").classList.remove("show"); // Close dropdown
    });

    document.getElementById("startButton").addEventListener("click", function () {
        window.location.href = "pages/controller.html";
    });

    // Set initial language
    setLanguage(currentLanguage);
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#languageButton') && !event.target.matches('#languageIcon')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
