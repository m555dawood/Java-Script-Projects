const endDate = "15 September 2025 05:23 PM";
document.getElementById("endDate").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    // If the countdown is over, stop the timer
    if (diff < 0) {
        clearInterval(intervalId);
        inputs.forEach(input => input.value = 0);
        return;
    }

    // Calculate and display the time units
    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600) % 24;
    const minutes = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff) % 60;

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}


clock();

// Update the timer every second
const intervalId = setInterval(clock, 1000);