const socket = new WebSocket("ws://localhost:8080");
let speed = 0, direction = 0;

function setupJoystick(elementId, callback, lockX, lockY) {
    let joystick = nipplejs.create({
        zone: document.getElementById(elementId),
        mode: 'static',
        position: { left: '50%', top: '50%' },
        lockX: lockX,
        lockY: lockY
    });

    joystick.on('move', (evt, data) => {
        let x = data.vector.x || 0;
        let y = data.vector.y || 0;
        callback(x, y);
    });

    joystick.on('end', () => callback(0, 0));
}

setupJoystick("joystick1", (_, y) => {
    speed = -y;
    sendData();
}, false, true);

setupJoystick("joystick2", (x, _) => {
    direction = x;
    sendData();
}, true, false);

function sendData() {
    let data = { speed, direction };
    socket.send(JSON.stringify(data));
}
