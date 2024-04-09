const clockDiv = document.getElementById('clock');

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros for single-digit values
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    clockDiv.textContent = timeString;
}

setInterval(updateTime, 1000); // Update the clock every second
