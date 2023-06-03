musicScore=localStorage.getItem("musicScore");
musicScoreDisplay=document.getElementById("musicScoreDisplay");
musicScoreDisplay.innerText=musicScore;

modernArtScore=localStorage.getItem("modernArtScore");
modernArtDisplay=document.getElementById("modernArtScoreDisplay");
modernArtDisplay.innerText=modernArtScore;

codingScore=localStorage.getItem("codingScore");
codingDisplay=document.getElementById("codingScoreDisplay");
codingDisplay.innerText=codingScore;

document.getElementById("home").addEventListener("click",()=>{
    window.location.href="index.html";
})
document.getElementById("reset").addEventListener("click",()=>{
    localStorage.clear();
    window.location.href="scores.html";
})