import data from "./dataset.json";
const questions = data.music;
// console.log(questions);

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
    if(aux[i].chosen==aux[i].correctOption){
      // console.log("yes");
      document.getElementById(aux[i].chosen).classList.add("correct");
    }else{
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
    question.innerText = `Result Summary`;
    optionA.innerText = `Questions attempted: ${questionCompletedYet}`;
    optionB.innerText = `correct answers: ${correctans}`;
    optionC.innerText = `incorrect answers: ${incorrectans}`;
    optionD.innerText = `your score: ${correctans}/10`;

    //set variable in localStorage to disable 
    localStorage.setItem("musicScore",correctans);

    //show the home button
    document.getElementById("home").removeAttribute("hidden");
    document.getElementById("home").addEventListener("click",()=>{
      window.location.href="index.html";
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
      if(aux[i].chosen==aux[i].correctOption){
        // console.log("yes");
        document.getElementById(aux[i].chosen).classList.add("correct");
      }else{
        // console.log("no");
        document.getElementById(aux[i].chosen).classList.add("incorrect");
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
    aux[i].done = true; // mark question as done
    questionCompletedYet++;
    if (e.target.innerText === aux[i].ans) {
      aux[i].correct = true;
      e.target.classList.add("correct");
    } else {
      aux[i].correct = false;
      e.target.classList.add("incorrect");
      document.getElementById(aux[i].correctOption).classList.add("correct");
    }
    aux[i].ans = questions[i].answer;
    aux[i].chosen = e.target.id;
  }
}

document.getElementById("options").addEventListener("click", checkAns);
