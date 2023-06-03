import data from "./dataset.json";
// console.log(data);
const pageLoaded = localStorage.getItem("pageLoaded");
if (pageLoaded === null || pageLoaded === "index") {
  //get buttons
  localStorage.setItem("pageLoaded", "index");
  const musicButton = document.getElementById("musicButton");
  const modernArtButton = document.getElementById("modernArtButton");
  const codingButton = document.getElementById("codingButton");
  const scores = document.getElementById("scores");

  function renderMusicQuiz() {
    // localStorage.clear();
    localStorage.setItem("pageLoaded", "musicQuiz");
    console.log(localStorage);
    location.reload();
  }
  function renderModernArtQuiz() {
    // localStorage.clear();
    localStorage.setItem("pageLoaded", "modernArtQuiz");
    location.reload();
  }
  function renderCodingQuiz() {
    // localStorage.clear();
    localStorage.setItem("pageLoaded", "codingQuiz");
    location.reload();
  }
  function renderScores() {
    // localStorage.clear();
    localStorage.setItem("pageLoaded", "scores");
    location.reload();
  }

  //add event listners to button
  musicButton.addEventListener("click", renderMusicQuiz);
  modernArtButton.addEventListener("click", renderModernArtQuiz);
  codingButton.addEventListener("click", renderCodingQuiz);
  scores.addEventListener("click", renderScores);

  //check for if quiz is done or not, then diable button conditionally
  if (localStorage.getItem("musicQuizCompleted") === "yes") {
    musicButton.classList.add("disabled");
    musicButton.removeEventListener("click", renderMusicQuiz);
  }
  if (localStorage.getItem("modernArtQuizCompleted") === "yes") {
    modernArtButton.classList.add("disabled");
    modernArtButton.removeEventListener("click", renderMusicQuiz);
  }
  if (localStorage.getItem("codingQuizCompleted") === "yes") {
    codingButton.classList.add("disabled");
    codingButton.removeEventListener("click", renderMusicQuiz);
  }
} else if (pageLoaded === "scores") {
  document.getElementById("center").innerHTML = `
  <div
        class="d-flex mt-3 flex-column justify-content-center align-items-center"
      >
        <div class="m-2">Music Score:<span id="musicScoreDisplay"></span></div>
        <div class="m-2">Modern Art Score:<span id="modernArtScoreDisplay"></span></div>
        <div class="m-2">Coding Score:<span id="codingScoreDisplay"></span></div>
        <div class="m-2">
          Scores are displayed once all ten questions are attempted in the quiz.
        </div>
        <div class="m-2">
          <button id="home" class="btn btn-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"
              />
            </svg>
            Home
          </button>
        </div>
        <div class="m-2">
          <button id="reset" class="btn btn-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path
                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
              />
            </svg>
            Reset
          </button>
        </div>
      </div>`;

  const musicScore = localStorage.getItem("musicQuizScore");
  const musicScoreDisplay = document.getElementById("musicScoreDisplay");
  musicScoreDisplay.innerText = musicScore;

  const modernArtScore = localStorage.getItem("modernArtQuizScore");
  const modernArtDisplay = document.getElementById("modernArtScoreDisplay");
  modernArtDisplay.innerText = modernArtScore;

  const codingScore = localStorage.getItem("codingQuizScore");
  const codingDisplay = document.getElementById("codingScoreDisplay");
  codingDisplay.innerText = codingScore;

  document.getElementById("home").addEventListener("click", () => {
    console.log("hello");
    localStorage.setItem("pageLoaded", "index");
    window.location.reload();
  });
  document.getElementById("reset").addEventListener("click", () => {
    localStorage.clear();
    localStorage.setItem("pageLoaded", "scores");
    window.location.reload();
  });
} else {
  //any of the quiz page
  let questions = [];
  if (pageLoaded === "musicQuiz") {
    questions = data.music;
  } else if (pageLoaded === "modernArtQuiz") {
    questions = data["modern-art"];
  } else {
    questions = data.coding;
  }
  // console.log(questions);
  //render view
  document.getElementById("center").innerHTML = `
  <div class="row mt-3">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div class="container m-1 text-center" id="question">lorem</div>
          <div id="options">
          <span class="d-block container m-1 text-start option" id="optionA">lorem</span>
          <span class="d-block container m-1 text-start option" id="optionB">lorem</span>
          <span class="d-block container m-1 text-start option" id="optionC">lorem</span>
          <span class="d-block container m-1 text-start option" id="optionD">lorem</span>
        </div>
        </div>
      </div>
      <div class="d-flex justify-content-end px-3">
        <button class="mx-1" id="prev">&lt; Prev</button>
        <button class="mx-1" id="next">Next &gt;</button>
        <button id="home" class="btn btn-info" hidden>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"
            />
          </svg>
          Home
        </button>
      </div>
      <div class="d-flex justify-content-center px-3" hidden id="ans"></div>
      `;
  //aux array for helping display css correctly.
  const aux = [
    {
      id: 0,
      done: false,
      correct: false,
      chosen: null,
      ans: questions[0].answer,
      correctOption: null,
    },
    {
      id: 1,
      done: false,
      correct: false,
      chosen: null,
      ans: questions[1].answer,
      correctOption: null,
    },
    {
      id: 2,
      done: false,
      correct: false,
      chosen: null,
      ans: questions[2].answer,
      correctOption: null,
    },
    {
      id: 3,
      done: false,
      correct: false,
      chosen: null,
      ans: questions[3].answer,
      correctOption: null,
    },
    {
      id: 4,
      done: false,
      correct: false,
      chosen: null,
      ans: questions[4].answer,
      correctOption: null,
    },
    {
      id: 5,
      done: false,
      correct: false,
      chosen: null,
      ans: questions[5].answer,
      correctOption: null,
    },
    {
      id: 6,
      done: false,
      correct: false,
      chosen: null,
      ans: questions[6].answer,
      correctOption: null,
    },
    {
      id: 7,
      done: false,
      correct: false,
      chosen: null,
      ans: questions[7].answer,
      correctOption: null,
    },
    {
      id: 8,
      done: false,
      correct: false,
      chosen: null, //value like optionA (id of chosen response)
      ans: questions[8].answer,
      correctOption: null,
    },
    {
      id: 9,
      done: false,
      correct: false,
      chosen: null,
      ans: questions[9].answer,
      correctOption: null,
    },
  ];

  //get elements
  const question = document.getElementById("question");
  const optionA = document.getElementById("optionA");
  const optionB = document.getElementById("optionB");
  const optionC = document.getElementById("optionC");
  const optionD = document.getElementById("optionD");
  const options = document.getElementById("options");

  //function remove css
  function removeCss() {
    optionA.classList.remove("incorrect");
    optionA.classList.remove("correct");

    optionB.classList.remove("incorrect");
    optionB.classList.remove("correct");

    optionC.classList.remove("incorrect");
    optionC.classList.remove("correct");

    optionD.classList.remove("incorrect");
    optionD.classList.remove("correct");
   
  }

  //load first question by default
  let i = 0; //counter variable to keep trak of question loaded
  if (aux[i].done === true) {
    // question is done show correct css
    // display question and as completed with chosen and correct ans marked
    removeCss();
    question.innerText = `Q.${i + 1} ${questions[i].question}`;
    optionA.innerText = questions[i].options[0];
    optionB.innerText = questions[i].options[1];
    optionC.innerText = questions[i].options[2];
    optionD.innerText = questions[i].options[3];
    document.getElementById(aux[i].chosen).classList.add("incorrect");
    document.getElementById(aux[i].correctOption).classList.add("correct");
  } else {
    //display as a new question and reset css
    removeCss();
    question.innerText = `Q.${i + 1} ${questions[i].question}`;
    optionA.innerText = questions[i].options[0];
    optionB.innerText = questions[i].options[1];
    optionC.innerText = questions[i].options[2];
    optionD.innerText = questions[i].options[3];
    if (optionA.innerText === aux[i].ans) {
      aux[i].correctOption = "optionA";
    } else if (optionB.innerText === aux[i].ans) {
      aux[i].correctOption = "optionB";
    } else if (optionC.innerText === aux[i].ans) {
      aux[i].correctOption = "optionC";
    } else if (optionD.innerText === aux[i].ans) {
      aux[i].correctOption = "optionD";
    }
  }

  let questionCompletedYet = 0; //counter to check how many question are done.

  //load other question when clicked next or prev
  function prev() {
    i = i - 1;
    if (i <= 0) i = 0; //prevent underflow
    if (aux[i].done === true) {
      // question is done show correct css
      removeCss();
      question.innerText = `Q.${i + 1} ${questions[i].question}`;
      optionA.innerText = questions[i].options[0];
      optionB.innerText = questions[i].options[1];
      optionC.innerText = questions[i].options[2];
      optionD.innerText = questions[i].options[3];
      if (aux[i].chosen === aux[i].correctOption) {
        // console.log("yes");
        document.getElementById(aux[i].chosen).classList.add("correct");
      } else {
        // console.log("no");
        document.getElementById(aux[i].chosen).classList.add("incorrect");
        document.getElementById(aux[i].correctOption).classList.add("correct");
    
      }
    } else {
      //display as a new question
      removeCss();
      question.innerText = `Q.${i + 1} ${questions[i].question}`;
      optionA.innerText = questions[i].options[0];
      optionB.innerText = questions[i].options[1];
      optionC.innerText = questions[i].options[2];
      optionD.innerText = questions[i].options[3];
      if (optionA.innerText === aux[i].ans) {
        aux[i].correctOption = "optionA";
      } else if (optionB.innerText === aux[i].ans) {
        aux[i].correctOption = "optionB";
      } else if (optionC.innerText === aux[i].ans) {
        aux[i].correctOption = "optionC";
      } else if (optionD.innerText === aux[i].ans) {
        aux[i].correctOption = "optionD";
      }
    }
  }
  function next() {
    if (questionCompletedYet == 10) {
      // showScore
      document.getElementById("prev").setAttribute("hidden", "true");
      document.getElementById("next").setAttribute("hidden", "true");
      let correctans = 0,
        incorrectans = 0;
      //loop through the aux array and count correct===true
      for (let item of aux) {
        if (item.correct === true) correctans++;
        else incorrectans++;
      }
      removeCss();
      question.innerText = `Result Summary`;
      optionA.innerText = `Questions attempted: ${questionCompletedYet}`;
      optionB.innerText = `correct answers: ${correctans}`;
      optionC.innerText = `incorrect answers: ${incorrectans}`;
      optionD.innerText = `your score: ${correctans}/10`;

      //set variable in localStorage to disable
      localStorage.setItem(`${pageLoaded}Score`, correctans);
      localStorage.setItem(`${pageLoaded}Completed`, "yes");

      //show the home button
      document.getElementById("home").removeAttribute("hidden");
      document.getElementById("home").addEventListener("click", () => {
        localStorage.setItem("pageLoaded", "index");
        window.location.reload();
      });
    } else {
      i = i + 1;
      if (i >= 9) i = 9; //do nothing
      // console.log(i);
      if (aux[i].done === true) {
        // question is done show correct css and mark question as done
        removeCss();
        question.innerText = `Q.${i + 1} ${questions[i].question}`;
        optionA.innerText = questions[i].options[0];
        optionB.innerText = questions[i].options[1];
        optionC.innerText = questions[i].options[2];
        optionD.innerText = questions[i].options[3];
        if (aux[i].chosen === aux[i].correctOption) {
          // console.log("yes");
          document.getElementById(aux[i].chosen).classList.add("correct");
         
        } else {
          // console.log("no");
          document.getElementById(aux[i].chosen).classList.add("incorrect");
          document.getElementById(aux[i].correctOption).classList.add("correct");
        
        }
      } else {
        //display as a new question
        removeCss();
        question.innerText = `Q.${i + 1} ${questions[i].question}`;
        optionA.innerText = questions[i].options[0];
        optionB.innerText = questions[i].options[1];
        optionC.innerText = questions[i].options[2];
        optionD.innerText = questions[i].options[3];
        if (optionA.innerText === aux[i].ans) {
          aux[i].correctOption = "optionA";
        } else if (optionB.innerText === aux[i].ans) {
          aux[i].correctOption = "optionB";
        } else if (optionC.innerText === aux[i].ans) {
          aux[i].correctOption = "optionC";
        } else if (optionD.innerText === aux[i].ans) {
          aux[i].correctOption = "optionD";
        }
        
      }
    }
  }

  document.getElementById("prev").onclick = prev;
  document.getElementById("next").onclick = next;

  //function to check answer of the question

  function checkAns(e) {
    if (aux[i].done === true) {
      //do nothing
    } else {
      if (e.target.nodeName === "SPAN") {
        aux[i].done = true; // mark question as done
        questionCompletedYet++;
        

        if (e.target.innerText === aux[i].ans) {
          aux[i].correct = true;
          e.target.classList.add("correct");
         
        } else {
          aux[i].correct = false;
          e.target.classList.add("incorrect");
          
          document
            .getElementById(aux[i].correctOption)
            .classList.add("correct");
        }
        aux[i].ans = questions[i].answer;
        aux[i].chosen = e.target.id;
      }
    }
  }

  document.getElementById("options").addEventListener("click", checkAns);
  window.onbeforeunload = function () {
    localStorage.setItem("pageLoaded", "index");
    if (questionCompletedYet != 10)
      localStorage.removeItem(`${pageLoaded}Score`);
  };
}
