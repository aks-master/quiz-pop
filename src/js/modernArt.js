import data from "./dataset.json";
const questions = data["modern-art"];
console.log(questions);

//get elements
const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

//load first question by default
let i = 0; //counter variable to keep trak of question loaded
question.innerText = `Q.${i+1} ${questions[i].question}`;
optionA.innerText = questions[i].options[0];
optionB.innerText = questions[i].options[1];
optionC.innerText = questions[i].options[2];
optionD.innerText = questions[i].options[3];

let questionCompletedYet = 0; //counter to check how many question are done.

//load other question when clicked next or prev
function prev() {
  i = i - 1;
  if (i <= 0) i = 0; //prevent underflow
  question.innerText = `Q.${i+1} ${questions[i].question}`;
  optionA.innerText = questions[i].options[0];
  optionB.innerText = questions[i].options[1];
  optionC.innerText = questions[i].options[2];
  optionD.innerText = questions[i].options[3];
}
function next() {
  i = i + 1;
  if (i >= 9) {
    //logic to show score
    if(questionCompletedYet==10){
        // showScore()
    } else{
        i=9; //do nothing
    }
  }
  question.innerText = `Q.${i+1} ${questions[i].question}`;
  optionA.innerText = questions[i].options[0];
  optionB.innerText = questions[i].options[1];
  optionC.innerText = questions[i].options[2];
  optionD.innerText = questions[i].options[3];
}

document.getElementById("prev").onclick=prev;
document.getElementById("next").onclick=next;
//function to check answer of the question
