





const loading = document.getElementById("loading");
const quizList = document.getElementById("quizList");

async function loadQuizzes() {
  try {
    const response = await fetch("/api/quizzes");

    if (!response.ok) {
      throw new Error("Server waking up...");
    }

    const quizzes = await response.json();

    // Clear old content (prevents duplicates)
    quizList.innerHTML = "";

    // Handle empty quizzes
    if (quizzes.length === 0) {
      loading.innerText = "No quizzes available yet.";
      return;
    }

    // Hide loading text
    loading.style.display = "none";

    quizzes.forEach((quiz) => {
      const card = document.createElement("div");
      card.className = "quiz-card";

      card.innerHTML = `
        <h3>${quiz.title}</h3>
        <p>${quiz.description}</p>
        <a href="quiz.html?id=${quiz.id}">Start Quiz</a>
      `;

      quizList.appendChild(card);
    });

  } catch (error) {
    console.log("Retrying...");
    loading.innerText = "Server waking up... please wait";
    setTimeout(loadQuizzes, 3000);
  }
}

// Start loading
loadQuizzes();





