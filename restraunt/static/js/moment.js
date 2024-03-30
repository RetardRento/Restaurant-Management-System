document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");
    const timerElement = document.getElementById("timer");
    const statusElement = document.getElementById("status");
    let timeRemaining = 60; // 1 minute in seconds

    const updateTimer = () => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        timerElement.textContent = formattedTime;

        const progressPercentage = (timeRemaining / 60) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        if (timeRemaining === 60) {
            statusElement.textContent = "Ordering...";
        } else if (timeRemaining === 40) {
            statusElement.textContent = "Order is Preparing...";
        } else if (timeRemaining === 20) {
            statusElement.textContent = "Order is Dispatched!";
        } else if (timeRemaining === 0) {
            statusElement.textContent = "Order Delivered!";
            clearInterval(interval);
        }

        timeRemaining--;
    };

    updateTimer(); // Call once immediately to avoid initial delay

    const interval = setInterval(updateTimer, 1000);
});
