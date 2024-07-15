
document.addEventListener('DOMContentLoaded', (event) => {
    let timer = document.getElementById('timer');
    let timeLeft = 600; // 5 minutes and 20 seconds in seconds

    const updateTimer = () => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        timer.textContent = `${minutes}:${seconds}`;
        if (timeLeft > 0) {
            timeLeft -= 1;
        } else {
            clearInterval(timerInterval);
        }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    
    const inputs = document.querySelectorAll(".input");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && index > 0 && input.value === '') {
                inputs[index - 1].focus();
            }
        });
    });
});