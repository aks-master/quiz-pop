//get buttons
const musicButton=document.getElementById("musicButton");
const modernArtButton=document.getElementById("modernArtButton");
const codingButton=document.getElementById("codingButton");

function redicrectToMusicQuiz(){
    window.location.href="musicQuiz.html";
}
function redicrectToModernArtQuiz(){
    window.location.href="modernArtQuiz.html";
}
function redicrectToCodingQuiz(){
    window.location.href="codingQuiz.html";
}

//add event listners to button
musicButton.addEventListener("click",redicrectToMusicQuiz);
modernArtButton.addEventListener("click",redicrectToModernArtQuiz);
codingButton.addEventListener("click",redicrectToCodingQuiz);

//check for if quiz is done or not, then diable button conditionally
if(localStorage.getItem("musicScore")!=0 && localStorage.getItem("musicScore")!=null){
    musicButton.classList.add("disabled");
    musicButton.removeEventListener("click",redicrectToMusicQuiz);

}
if(localStorage.getItem("modernArtScore")!=0 && localStorage.getItem("modernArtScore")!=null){
    modernArtButton.classList.add("disabled");
    modernArtButton.removeEventListener("click",redicrectToMusicQuiz);

}
if(localStorage.getItem("codingScore")!=0 && localStorage.getItem("codingScore")!=null){
    codingButton.classList.add("disabled");
    codingButton.removeEventListener("click",redicrectToMusicQuiz);

}