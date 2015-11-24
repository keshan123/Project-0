//preparing a function to change to board message!

var boardMsg = function (x){
  return $("#boardMessage").text(x);
}

//Initiating the game! (.map creates a new array with the results of calling a provided function in every element)
var init = function (){
  turn = "";
  grid = [[0,0,0],[0,0,0],[0,0,0]];
  boardMsg("");
  $(".col").map(function(){
    $(this).text("");
  }).get();
  haveWinner = 0;
  moveCounter = 0;
}

//Playbutton event listener