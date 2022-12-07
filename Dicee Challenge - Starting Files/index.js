
var player1 = "Player 1";
var player2 = "Player 2";

   function editNames() {
       player1 = prompt("Change Player1 Name");
       player2 = prompt("Change player2 Name");

       document.querySelector("p.Player1").innerHTML = player1;
       document.querySelector("p.Player2").innerHTML = player2;
   }
function playGame(){
  // setTimeout(function () {
  var randomNumber1 = Math.floor((Math.random()* 6) + 1);
  var randomNumber2 = Math.floor((Math.random()* 6) + 1);

  var randonmDiceImage1 = "images/dice" + randomNumber1 + ".png";
  var randonmDiceImage2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", randonmDiceImage1);
  document.querySelector(".img2").setAttribute("src", randonmDiceImage2);

  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = (player1 + " Wins!!")
  }
  else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = (player2 + " Wins!!")
  }
  else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "DRAW!!"
  }
  // }, 2500);
}
