<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Answer a Question</title>  <!-- BASIC STYLES -->  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .ad {
      background: #ddd;
      text-align: center;
      padding: 15px;
      margin: 10px;
      font-weight: bold;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #fff;
      padding: 20px;
      border-radius: 8px;
    }

    textarea {
      width: 100%;
      height: 120px;
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
    }

    button {
      width: 100%;
      padding: 12px;
      font-size: 18px;
      margin-top: 15px;
    }

    #status {
      margin-top: 10px;
      color: green;
    }
  </style></head>
<body>  <!-- TOP AD -->  <div class="ad">AD SPACE</div>  <div class="container">
    <h1 id="question">What feature do you care about most in a smartphone?</h1><textarea id="answer" placeholder="Type your answer here..."></textarea>

<!-- INLINE AD -->
<div class="ad">AD SPACE</div>

<button id="submitBtn" disabled>Submit Answer</button>

<p id="status"></p>

  </div>  <!-- BOTTOM AD -->  <div class="ad">AD SPACE</div>  <!-- PAGE LOGIC -->  <script>
    let seconds = 0;
    const btn = document.getElementById('submitBtn');
    const status = document.getElementById('status');

    const timer = setInterval(() => {
      seconds++;
      if (seconds >= 7) {
        btn.disabled = false;
        clearInterval(timer);
      }
    }, 1000);

    btn.onclick = () => {
      const answer = document.getElementById('answer').value.trim();

      if (answer.length < 5) {
        status.style.color = 'red';
        status.textContent = 'Please write a longer answer.';
        return;
     