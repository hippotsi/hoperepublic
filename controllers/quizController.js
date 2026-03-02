





const quizzes = require("../data/quizzes");

// Helper: Shuffle array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// GET all quizzes (without questions)
exports.getAllQuizzes = (req, res) => {
  const quizList = quizzes.map((quiz) => ({
    id: quiz.id,
    title: quiz.title,
    category: quiz.category,
    description: quiz.description
  }));

  res.json(quizList);
};

// GET single quiz by ID
exports.getQuizById = (req, res) => {
  const { id } = req.params;
  const { limit } = req.query;

  const quiz = quizzes.find((q) => q.id === id);

  if (!quiz) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  let questions = [...quiz.questions];

  // Shuffle questions
  questions = shuffleArray(questions);

  // Apply limit if provided
  if (limit) {
    questions = questions.slice(0, parseInt(limit));
  }





  // Remove answers before sending to frontend
  // const sanitizedQuestions = questions.map(({ answer, ...rest }) => rest);

  // Temporarily sending to frontend
  const sanitizedQuestions = questions;




  res.json({
    id: quiz.id,
    title: quiz.title,
    description: quiz.description,
    questions: sanitizedQuestions
  });
};




