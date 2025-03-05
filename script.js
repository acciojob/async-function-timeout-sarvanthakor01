//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
    const textInput = document.getElementById("text").value.trim();
    const delayInput = parseInt(document.getElementById("delay").value);
    const outputDiv = document.getElementById("output");

    // Clear previous output
    outputDiv.innerHTML = "";

    // Validation: Ensure inputs are not empty
    if (!textInput || isNaN(delayInput) || delayInput <= 0) {
        alert("Please enter valid details.");
        return;
    }

    // Show "Loading..." while waiting
    outputDiv.textContent = "Loading...";

    // Create a promise to delay text display
    new Promise((resolve) => {
        setTimeout(() => resolve(textInput), delayInput);
    })
    .then((result) => {
        outputDiv.textContent = result; // Display text after delay
    });
});
