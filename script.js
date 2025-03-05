//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text');
    const delayInput = document.getElementById('delay');
    const button = document.getElementById('btn');
    const output = document.getElementById('output');

    // Function to introduce a delay using async/await
    const delayMessage = (message, delay) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(message), delay);
        });
    };

    // Event listener for button click
    button.addEventListener('click', async () => {
        const message = textInput.value;
        const delay = parseInt(delayInput.value);

        // Validate input
        if (!message) {
            output.innerHTML = "Please enter a message.";
            return;
        }

        if (isNaN(delay) || delay < 0) {
            output.innerHTML = "Please enter a valid delay in milliseconds.";
            return;
        }

        output.innerHTML = "Waiting...";

        const result = await delayMessage(message, delay);
        output.innerHTML = result;
    });
});
