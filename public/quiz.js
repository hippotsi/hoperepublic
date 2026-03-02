





const quizTitle = document.getElementById("quiz-title");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progress = document.getElementById("progress");
const skipBtn = document.getElementById("skip-btn");

let quizData = [];
let currentQuestionIndex = 0;
let score = 0;

// const quizId = "general-knowledge";
const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get("id");



// Shuffle function
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Fetch quiz
async function loadQuiz() {
  const response = await fetch(
    `/api/quizzes/${quizId}?limit=20`
  );
  const data = await response.json();

  quizTitle.textContent = data.title;
  quizData = data.questions;

  showQuestion();
}





// ====== Show Questions   =======

function showQuestion() {
  optionsContainer.innerHTML = "";

  const currentQuestion = quizData[currentQuestionIndex];

  progress.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  questionText.textContent = currentQuestion.question;

  const shuffledOptions = shuffleArray([...currentQuestion.options]);

  shuffledOptions.forEach(option => {
    const div = document.createElement("div");
    div.textContent = option;
    div.classList.add("option");

    div.addEventListener("click", () =>
      selectAnswer(div, option, currentQuestion.answer)
    );

    optionsContainer.appendChild(div);
  });
}

function selectAnswer(element, selectedOption, correctAnswer) {
  const allOptions = document.querySelectorAll(".option");

  allOptions.forEach(opt => {
    opt.style.pointerEvents = "none";

    if (opt.textContent === correctAnswer) {
      opt.classList.add("correct");
    }
  });

  if (selectedOption !== correctAnswer) {
    element.classList.add("wrong");
  } else {
    score++;
  }

  moveNext();
}

skipBtn.addEventListener("click", () => {
  moveNext(); // Skip counts as wrong automatically
});

function moveNext() {
  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}






// =======   Show Result   =======
function showResult() {
  const percentage = Math.round((score / quizData.length) * 100);

  let resultClass = "";
  let message = "";

  if (percentage === 100) {
    resultClass = "result-good";
    message = "Perfect Score! You're unstoppable! 🔥";
    launchConfetti();
  } else if (percentage >= 60) {
    resultClass = "result-average";
    message = "Nice job! You did well 👍";
  } else {
    resultClass = "result-bad";
    message = "Keep practicing! You'll improve 💪";
  }

  const container = document.querySelector(".quiz-container");
  container.className = `quiz-container ${resultClass}`;

  container.innerHTML = `
    <h1>Quiz Completed 🎉</h1>
    <h2>Your Score: ${score} / ${quizData.length}</h2>
    <h3>${percentage}%</h3>
    <p>${message}</p>

    <button onclick="playAgain()">Play Again</button>
    <button onclick="goHome()">Back to Quizzes</button>
    <button onclick="shareResult(${percentage})">Share Result</button>
  `;

  // ========   Share to Social Media Function   =======
  

  const shareText = `🔥 I scored ${percentage}% on the ${quiz.title} quiz! Can you beat me?`;

  const shareURL = window.location.href;

  // Native Share (mobile)
  document.getElementById("shareBtn").onclick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Quiz Result",
          text: shareText,
          url: shareURL
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  // Copy Link
  document.getElementById("copyBtn").onclick = () => {
    navigator.clipboard.writeText(shareURL);
    alert("Link copied to clipboard!");
  };

  // Facebook
  document.getElementById("facebookShare").href =
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`;

  // Twitter (X)
  document.getElementById("twitterShare").href =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareURL)}`;

  // WhatsApp
  document.getElementById("whatsappShare").href =
    `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareURL)}`;



}





// =======   Confetti Launch   =======
function launchConfetti() {
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

loadQuiz();


// =======   Share Reults   =======
function playAgain() {
  window.location.reload();
}

function goHome() {
  window.location.href = "index.html";
}

function shareResult(percentage) {
  const text = `I scored ${percentage}% on HopeRepublic Quiz! 🎯🔥`;
  
  if (navigator.share) {
    navigator.share({
      title: "HopeRepublic Quiz",
      text: text,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(text);
    alert("Result copied to clipboard!");
  }
}


