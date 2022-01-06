var Score=0;
function SaveScore(){
    localStorage.setItem("score",Score)
}
function getScore(){
    Score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1> score : "+Score+"</h1>";
}
function addUser(){
    player1name=document.getElementById("Player1").value;
    player2name=document.getElementById("Player2").value;
    localStorage.setItem("Player1",player1name);
    localStorage.setItem("Player2",player2name);
    window.location.replace("game.html");
}
