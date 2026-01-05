const submitBtn = document.getElementById("submitBtn");
const status = document.getElementById("status");
let timeSpent = 0;

// Require 7 seconds before submission
const timer = setInterval(() => {
  timeSpent++;
  if (timeSpent >= 7) {
    submitBtn.disabled = false;
    clearInterval(timer);
  }
}, 1000);

submitBtn.addEventListener("click", () => {
  const answer = document.getElementById("answer").value.trim();

  if (answer.length < 5) {
    status.textContent = "Answer too short.";
    return;
  }

  submitBtn.disabled = true;

  // Fake submit (replace with backend later)
  console.log("Submitted:", answer);

  status.textContent = "Answer submitted. Loading next question...";

  setTimeout(() => {
    location.reload();
  }, 2000);
});