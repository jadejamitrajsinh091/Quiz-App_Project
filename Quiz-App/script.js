const quizData = [
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "Which HTML tag is used to create a paragraph?",
    options: ["<p>", "<h1>", "<div>", "<span>"],
    answer: "<p>",
  },
  {
    question: "Which CSS property changes the text color?",
    options: ["background", "font-size", "color", "text-align"],
    answer: "color",
  },
  {
    question: "Which CSS property is used to change the background color?",
    options: ["background-color", "color", "bgcolor", "background-image"],
    answer: "background-color",
  },
  {
    question: "Which symbol is used to declare an ID selector in CSS?",
    options: ["#", ".", "*", "$"],
    answer: "#",
  },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;
let selectedOption = null;

let que = document.getElementById("question");
let opt = document.getElementById("options");
let time = document.getElementById("time");
let result = document.getElementById("result");
let next = document.getElementById("next-btn");
let timeDiv = document.getElementById("timeDiv");

function showQuestion() 
{
  que.innerText = quizData[currentQuestion].question;
}

function showOptions()
 {
  opt.innerHTML = "";

  quizData[currentQuestion].options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";

    button.className = "option-btn btn btn-outline-info m-2 option";
    button.textContent = option;

    button.onclick = () =>
      selectOption(option, quizData[currentQuestion].answer);

    opt.appendChild(button);
  });
}

showQuestion();
showOptions();
startTimer();

function nextQuestion()
 {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
    showOptions();
    startTimer();
  } else {
    showResult();
  }
}

function showResult() {
  que.innerText = "Quiz Completed!";
  opt.innerHTML = "";
  result.innerText = `🎉Your score: ${score} out of ${quizData.length}`;
  next.style.display = "none";
  time.style.display = "none";
  timeDiv.style.display = "none";

  clearInterval(timer);


}

function selectOption(selectedAnswer, correctAnswer) {

  clearInterval(timer);

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length)
  {
    showQuestion();
    showOptions();
    startTimer();
  } 
  else
     {
    showResult();
  }
}

function startTimer() {
  clearInterval(timer);

  timeLeft = 30;
  time.innerText = `${timeLeft}`;

  timer = setInterval(() => {
    timeLeft--;
    time.innerText = `${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(timer);

      nextQuestion();
    }
  }, 1000);
}
