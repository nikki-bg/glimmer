
const quizData = [
  {
    question: "Pick your element:",
    answers: [
      { text: "🌊 Water", value: "ocean" },
      { text: "⚡ Chrome", value: "diamond" },
      { text: "🌸 Petals", value: "goddess" }
    ]
  },
  {
    question: "Your aura color?",
    answers: [
      { text: "Blue / Aquamarine", value: "ocean" },
      { text: "Black / Silver", value: "diamond" },
      { text: "Pink / Gold", value: "goddess" }
    ]
  }
];

let currentQuestion = 0;
let scores = { ocean: 0, diamond: 0, goddess: 0 };

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question-box").innerText = q.question;
  const answersBox = document.getElementById("answers-box");
  answersBox.innerHTML = "";
  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.onclick = () => selectAnswer(answer.value);
    answersBox.appendChild(btn);
  });
}

function selectAnswer(value) {
  scores[value]++;
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let top = Object.entries(scores).sort((a,b) => b[1] - a[1])[0][0];
  window.location.href = top + ".html";
}

document.getElementById("next-btn").style.display = "none";
loadQuestion();
