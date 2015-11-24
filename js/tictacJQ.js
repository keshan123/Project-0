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

// creating playbutton event listener
$("#startButton").click(function(){
  if(haveWinner == 1){
    init();
  }
  //connecting input to variable.(.val = get the current value within the element (this case input))
  player1 = $("player-1-input").val();
  player2 = $("player-2-input").val();
  if (player1 == "" || player2 == ""){
    alert("Please select names! ");
    return;
  }//startsGame
  whoseTurn();
});

//adding functionality to the colums! (.col)
$(".col").click(function(){
  if (player1 == ""|| player2 = "");
  }// .parent() is the parent of the element. .index() indicates the position of an element.
  var row = $(this).parent().index();
  var col = $(this).index();

  if (grid[row][col] !== 0){
    alert("Occupied area, Tic Tac Go somewhere else");
    return;
  }
  if (haveWinner == 1){
    alert("Click play again!");
    return;
  }
  if (turn == player1){
      //This counter is for calculating ties later (you can ignore)
      moveCounter++;
      $(this).text("O");
  }
})




























