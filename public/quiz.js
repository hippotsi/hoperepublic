





const quizTitle = document.getElementById("quiz-title");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progress = document.getElementById("progress");
const skipBtn = document.getElementById("skip-btn");

let quizData = [];
let currentQuestionIndex = 0;
let score = 0;

const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get("id");


// ✅ Load quiz from API
async function loadQuiz() {
  try {
    if (!quizId) {
      questionText.textContent = "No quiz selected.";
      return;
    }

    const response = await fetch(`/api/quizzes/${quizId}?limit=20`);

    if (!response.ok) {
      throw new Error("Failed to load quiz");
    }

    const data = await response.json();

    quizTitle.textContent = data.title;
    quizData = data.questions;

    showQuestion();

  } catch (error) {
    questionText.textContent = "Failed to load quiz. Please try again.";
    console.log(error);
  }
}


// Shuffle function
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}


// ====== Show Questions ======
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


// ====== Answer Selection ======
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


// Skip button
skipBtn.addEventListener("click", () => {
  moveNext();
});


// ====== Next Question ======
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


// ======= Show Result =======
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
}


// ======= Confetti =======
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


// ======= Actions =======
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


// 🚀 Start
loadQuiz();





