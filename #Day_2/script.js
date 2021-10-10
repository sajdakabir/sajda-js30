const second = document.querySelector(".second-hand");
const min = document.querySelector(".min-hand");
const hour = document.querySelector(".hour-hand");


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    second.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    min.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const houresDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hour.style.transform = `rotate(${houresDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
