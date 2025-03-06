document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            title: "X-HYDRO",
            description1: "X-HYDRO is a school project based on a realization of a Wi-Fi Controlled Boat.",
            description2: "It was created by the X-Hydro Development Team.",
            startButton: "Launch the Controller"
        },
        ua: {
            title: "X-HYDRO",
            description1: "X-HYDRO - це шкільний проєкт на основі реалізації Wi-Fi керованого човна.",
            description2: "Він був створений командою розробників X-Hydro.",
            startButton: "Запустити контролер"
        },
        it: {
            title: "X-HYDRO",
            description1: "X-HYDRO è un progetto scolastico basato sulla realizzazione di una barca controllata via Wi-Fi.", description2: "È stato creato dal team di sviluppatori X-Hydro.",
            startButton: "Avvia il controller"
        }
    };

    let currentLanguage = 'en';

    function setLanguage(language) {
        document.getElementById('title').textContent = translations[language].title;
        document.getElementById('description1').textContent = translations[language].description1;
        document.getElementById('description2').textContent = translations[language].description2;
        document.getElementById('startButton').textContent = translations[language].startButton;
    }

    document.getElementById("languageButton").addEventListener("click", function () {
        const dropdown = document.getElementById("languageDropdown");
        dropdown.classList.toggle("show");
    });

    document.getElementById("enButton").addEventListener("click", function () {
        currentLanguage = 'en';
        setLanguage(currentLanguage);
        document.getElementById("languageDropdown").classList.remove("show");
    });

    document.getElementById("uaButton").addEventListener("click", function () {
        currentLanguage = 'ua';
        setLanguage(currentLanguage);
        document.getElementById("languageDropdown").classList.remove("show");
    });

    document.getElementById("itButton").addEventListener("click", function () {
        currentLanguage = 'it';
        setLanguage(currentLanguage);
        document.getElementById("languageDropdown").classList.remove("show");
    });

    document.getElementById("startButton").addEventListener("click", function () {
        window.location.href = "pages/controller.html";
    });

    setLanguage(currentLanguage);
});

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
