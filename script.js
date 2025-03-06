//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
  const text = document.getElementById("text").value;
  const delay = document.getElementById("delay").value;

  if (!text.trim() || isNaN(delay) || delay < 0) {
    alert("Please enter valid text and a positive delay.");
    return;
  }

  await delayMessage(text, parseInt(delay));
});

function delayMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.getElementById("output").textContent = message;
      resolve();
    }, delay);
  });
}
