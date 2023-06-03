(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const w=[{id:1,question:"Which of the following is not a type of music notation?",options:["Standard notation","Tab notation","Morse code notation","Graphics notation"],answer:"Morse code notation",category:"music"},{id:2,question:"What is the most common time signature in classical music?",options:["3/4","4/4","5/4","6/8"],answer:"4/4",category:"music"},{id:3,question:"Which of the following is not a type of instrument in a symphony orchestra?",options:["Violin","Piano","Harp","Theremin"],answer:"Theremin",category:"music"},{id:4,question:"What is the most common key in pop music?",options:["C Major","G Major","D Major","A Major"],answer:"C Major",category:"music"},{id:5,question:"Which of the following is not a type of chord?",options:["Major","Minor","Diminished","Flat"],answer:"Flat",category:"music"},{id:6,question:"Which of the following is not a type of music genre?",options:["Jazz","Blues","Rock","Applesauce"],answer:"Applesauce",category:"music"},{id:7,question:"Which of the following is not a type of music theory?",options:["Harmony","Counterpoint","Form","Cooking"],answer:"Cooking",category:"music"},{id:8,question:"What is the most common tempo marking in classical music?",options:["Allegro","Andante","Adagio","Moderato"],answer:"Allegro",category:"music"},{id:9,question:"Which of the following is not a type of musical form?",options:["Sonata","Symphony","Concerto","Spaghetti"],answer:"Spaghetti",category:"music"},{id:10,question:"Which of the following is not a type of music notation software?",options:["Sibelius","Finale","MuseScore","Microsoft Word"],answer:"Microsoft Word",category:"music"}],v=[{id:21,question:"What is the correct syntax for an if statement in Python?",options:["if (condition):","if condition","if: condition","if condition:"],answer:"if condition:",category:"coding"},{id:22,question:"Which of the following is not a data type in JavaScript?",options:["String","Number","Boolean","ArrayList"],answer:"ArrayList",category:"coding"},{id:23,question:"Which of the following is used to declare a variable in Java?",options:["var","let","const","int"],answer:"int",category:"coding"},{id:24,question:"What is the correct syntax for a for loop in C#?",options:["for i = 0 to 10","for (i = 0; i <= 10; i++)","for (int i = 0; i <= 10)","for i in range(0, 10)"],answer:"for (i = 0; i <= 10; i++)",category:"coding"},{id:25,question:"Which of the following is not a looping structure in PHP?",options:["while","for","do-while","foreach"],answer:"foreach",category:"coding"},{id:26,question:"Which of the following is not a valid operator in C++?",options:["+","-","*","$"],answer:"$",category:"coding"},{id:27,question:"In which programming language is 'print' used for displaying output?",options:["Python","JavaScript","Java","C++"],answer:"Python",category:"coding"},{id:28,question:"What is the correct syntax for a function in Ruby?",options:["function name()","def name","function name","def name()"],answer:"def name()",category:"coding"},{id:29,question:"Which of the following is not a type of variable in Swift?",options:["Int","String","Double","Object"],answer:"Object",category:"coding"},{id:30,question:"In which programming language is '#' used for commenting?",options:["Python","JavaScript","Java","C++"],answer:"C++",category:"coding"}],m={music:w,"modern-art":[{id:11,question:"Which artist is known for coining the term 'Surrealism'?",options:["Pablo Picasso","Salvador Dali","Vincent van Gogh","Henri Matisse"],answer:"Salvador Dali",category:"modern-art"},{id:12,question:"Which movement is associated with the use of abstract forms and shapes in art?",options:["Impressionism","Expressionism","Futurism","Cubism"],answer:"Cubism",category:"modern-art"},{id:13,question:"Which artist is known for painting the work 'The Persistence of Memory'?",options:["Pablo Picasso","Salvador Dali","Vincent van Gogh","Henri Matisse"],answer:"Salvador Dali",category:"modern-art"},{id:14,question:"Which artist is known for creating the painting 'The Scream'?",options:["Vincent van Gogh","Salvador Dali","Edvard Munch","Claude Monet"],answer:"Edvard Munch",category:"modern-art"},{id:15,question:"What movement was associated with the use of bold, bright colors and thick brushstrokes?",options:["Impressionism","Expressionism","Fauvism","Cubism"],answer:"Fauvism",category:"modern-art"},{id:16,question:"What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",options:["Impressionism","Futurism","Surrealism","Abstract Expressionism"],answer:"Futurism",category:"modern-art"},{id:17,question:"Which artist is known for creating the painting 'Water Lilies'?",options:["Claude Monet","Paul Cezanne","Paul Gauguin","Paul Klee"],answer:"Claude Monet",category:"modern-art"},{id:18,question:"Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",options:["Henri Matisse","Vincent van Gogh","Salvador Dali","Pablo Picasso"],answer:"Pablo Picasso",category:"modern-art"},{id:19,question:"Which artist is known for creating the painting 'Guernica'?",options:["Claude Mone","Paul Cezanne","Pablo Picasso","Vincent van Gogh"],answer:"Pablo Picasso",category:"modern-art"},{id:20,question:"Which artist is known for creating the sculpture 'The Thinker'?",options:["Auguste Rodin","Alexander Calder","Jean Arp","Henry Moore"],answer:"Auguste Rodin",category:"modern-art"}],coding:v},d=localStorage.getItem("pageLoaded");if(d===null||d==="index"){let n=function(){localStorage.clear(),localStorage.setItem("pageLoaded","musicQuiz"),console.log(localStorage),location.reload()},i=function(){localStorage.clear(),localStorage.setItem("pageLoaded","modernArtQuiz"),location.reload()},r=function(){localStorage.clear(),localStorage.setItem("pageLoaded","codingQuiz"),location.reload()},c=function(){localStorage.setItem("pageLoaded","scores"),location.reload()};var renderMusicQuiz=n,renderModernArtQuiz=i,renderCodingQuiz=r,renderScores=c;localStorage.setItem("pageLoaded","index");const o=document.getElementById("musicButton"),t=document.getElementById("modernArtButton"),a=document.getElementById("codingButton"),s=document.getElementById("scores");o.addEventListener("click",n),t.addEventListener("click",i),a.addEventListener("click",r),s.addEventListener("click",c),localStorage.getItem("musicQuizCompleted")==="yes"&&(o.classList.add("disabled"),o.removeEventListener("click",n)),localStorage.getItem("modernArtQuizCompleted")==="yes"&&(t.classList.add("disabled"),t.removeEventListener("click",n)),localStorage.getItem("codingQuizCompleted")==="yes"&&(a.classList.add("disabled"),a.removeEventListener("click",n))}else if(d==="scores"){document.getElementById("center").innerHTML=`
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
      </div>`;const o=localStorage.getItem("musicQuizScore"),t=document.getElementById("musicScoreDisplay");t.innerText=o;const a=localStorage.getItem("modernArtQuizScore"),s=document.getElementById("modernArtScoreDisplay");s.innerText=a;const n=localStorage.getItem("codingQuizScore"),i=document.getElementById("codingScoreDisplay");i.innerText=n,document.getElementById("home").addEventListener("click",()=>{console.log("hello"),localStorage.setItem("pageLoaded","index"),window.location.reload()}),document.getElementById("reset").addEventListener("click",()=>{localStorage.clear(),localStorage.setItem("pageLoaded","scores"),window.location.reload()})}else{let c=function(){s.classList.remove("incorrect"),s.classList.remove("correct"),n.classList.remove("incorrect"),n.classList.remove("correct"),i.classList.remove("incorrect"),i.classList.remove("correct"),r.classList.remove("incorrect"),r.classList.remove("correct")},p=function(){e=e-1,e<=0&&(e=0),t[e].done===!0?(c(),a.innerText=`Q.${e+1} ${o[e].question}`,s.innerText=o[e].options[0],n.innerText=o[e].options[1],i.innerText=o[e].options[2],r.innerText=o[e].options[3],t[e].chosen==t[e].correctOption?document.getElementById(t[e].chosen).classList.add("correct"):(document.getElementById(t[e].chosen).classList.add("incorrect"),document.getElementById(t[e].correctOption).classList.add("correct"))):(c(),a.innerText=`Q.${e+1} ${o[e].question}`,s.innerText=o[e].options[0],n.innerText=o[e].options[1],i.innerText=o[e].options[2],r.innerText=o[e].options[3],s.innerText===t[e].ans?t[e].correctOption="optionA":n.innerText===t[e].ans?t[e].correctOption="optionB":i.innerText===t[e].ans?t[e].correctOption="optionC":r.innerText===t[e].ans&&(t[e].correctOption="optionD"))},g=function(){if(u==10){document.getElementById("prev").setAttribute("hidden","true"),document.getElementById("next").setAttribute("hidden","true");let l=0,h=0;for(let y of t)y.correct===!0?l++:h++;a.innerText="Result Summary",s.innerText=`Questions attempted: ${u}`,n.innerText=`correct answers: ${l}`,i.innerText=`incorrect answers: ${h}`,r.innerText=`your score: ${l}/10`,localStorage.setItem(`${d}Score`,l),localStorage.setItem(`${d}Completed`,"yes"),document.getElementById("home").removeAttribute("hidden"),document.getElementById("home").addEventListener("click",()=>{localStorage.setItem("pageLoaded","index"),window.location.reload()})}else e=e+1,e>=9&&(e=9),t[e].done===!0?(c(),a.innerText=`Q.${e+1} ${o[e].question}`,s.innerText=o[e].options[0],n.innerText=o[e].options[1],i.innerText=o[e].options[2],r.innerText=o[e].options[3],t[e].chosen==t[e].correctOption?document.getElementById(t[e].chosen).classList.add("correct"):(document.getElementById(t[e].chosen).classList.add("incorrect"),document.getElementById(t[e].correctOption).classList.add("correct"))):(c(),a.innerText=`Q.${e+1} ${o[e].question}`,s.innerText=o[e].options[0],n.innerText=o[e].options[1],i.innerText=o[e].options[2],r.innerText=o[e].options[3],s.innerText===t[e].ans?t[e].correctOption="optionA":n.innerText===t[e].ans?t[e].correctOption="optionB":i.innerText===t[e].ans?t[e].correctOption="optionC":r.innerText===t[e].ans&&(t[e].correctOption="optionD"))},f=function(l){t[e].done===!0||l.target.nodeName==="SPAN"&&(t[e].done=!0,u++,l.target.innerText===t[e].ans?(t[e].correct=!0,l.target.classList.add("correct")):(t[e].correct=!1,l.target.classList.add("incorrect"),document.getElementById(t[e].correctOption).classList.add("correct")),t[e].ans=o[e].answer,t[e].chosen=l.target.id)};var removeCss=c,prev=p,next=g,checkAns=f;let o=[];d==="musicQuiz"?o=m.music:d==="modernArtQuiz"?o=m["modern-art"]:o=m.coding,document.getElementById("center").innerHTML=`
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
      </div>`;const t=[{id:0,done:!1,correct:!1,chosen:null,ans:o[0].answer,correctOption:null},{id:1,done:!1,correct:!1,chosen:null,ans:o[1].answer,correctOption:null},{id:2,done:!1,correct:!1,chosen:null,ans:o[2].answer,correctOption:null},{id:3,done:!1,correct:!1,chosen:null,ans:o[3].answer,correctOption:null},{id:4,done:!1,correct:!1,chosen:null,ans:o[4].answer,correctOption:null},{id:5,done:!1,correct:!1,chosen:null,ans:o[5].answer,correctOption:null},{id:6,done:!1,correct:!1,chosen:null,ans:o[6].answer,correctOption:null},{id:7,done:!1,correct:!1,chosen:null,ans:o[7].answer,correctOption:null},{id:8,done:!1,correct:!1,chosen:null,ans:o[8].answer,correctOption:null},{id:9,done:!1,correct:!1,chosen:null,ans:o[9].answer,correctOption:null}],a=document.getElementById("question"),s=document.getElementById("optionA"),n=document.getElementById("optionB"),i=document.getElementById("optionC"),r=document.getElementById("optionD");document.getElementById("options");let e=0;t[e].done===!0?(c(),a.innerText=`Q.${e+1} ${o[e].question}`,s.innerText=o[e].options[0],n.innerText=o[e].options[1],i.innerText=o[e].options[2],r.innerText=o[e].options[3],document.getElementById(t[e].chosen).classList.add("incorrect"),document.getElementById(t[e].correctOption).classList.add("correct")):(c(),a.innerText=`Q.${e+1} ${o[e].question}`,s.innerText=o[e].options[0],n.innerText=o[e].options[1],i.innerText=o[e].options[2],r.innerText=o[e].options[3],s.innerText===t[e].ans?t[e].correctOption="optionA":n.innerText===t[e].ans?t[e].correctOption="optionB":i.innerText===t[e].ans?t[e].correctOption="optionC":r.innerText===t[e].ans&&(t[e].correctOption="optionD"));let u=0;document.getElementById("prev").onclick=p,document.getElementById("next").onclick=g,document.getElementById("options").addEventListener("click",f),window.onbeforeunload=function(){localStorage.setItem("pageLoaded","index"),u!=10&&localStorage.removeItem(`${d}Score`)}}