//preparing a function to change to board message!
$( document ).ready(function() {
    console.log( "ready!" );
});
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
  if (player1 == ""|| player2 == "");{
    alert("please set names!")
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
      grid[row][row] = 1;
      var ifWon = checkWinner(1,player1);
      if(!ifWon){
        //9 moves means no one won!
        if(moveCounter >=9){
          boardMsg("DRAW!");
          moveCounter = 0;
          $("#startButton").text("Play again!");
          haveWinner = 1;
          return;
        } else {
          turn = player2;
          boardMsg(player2+ "'s turn");
        }
        return;
      } else {
        return;
    }
  } 
    else if (turn == player2){
      moveCounter ++;
      $(this).text("X");
      grid[row][col] = 2;
      var ifWon = checkWinner(2,player2);
      if (!ifWon){
        if (moveCounter >= 9){
          boardMsg("DRAW!");
          moveCounter = 0 ;
          $("#startButton").text("Play again");
          haveWinner = 1;
          return;
        } else{
          turn = player1;
          boardMsg(player1+"'s turn now!");
        } return;
      } else{
        return;
      }
    }
});

var checkWinner = function (num , player){
    if(
        //row check
        (grid[0][0]==n && grid[0][1]==n && grid[0][2]==n) ||
        (grid[1][0]==n && grid[1][1]==n && grid[1][2]==n) ||
        (grid[2][0]==n && grid[2][1]==n && grid[2][2]==n) ||
        //column check
        (grid[0][0]==n && grid[1][0]==n && grid[2][0]==n) ||
        (grid[0][1]==n && grid[1][1]==n && grid[2][1]==n) ||
        (grid[0][2]==n && grid[1][2]==n && grid[2][2]==n) ||
        //diagonal check
        (grid[0][0]==n && grid[1][1]==n && grid[2][2]==n)||
        (grid[0][2]==n && grid[1][1]==n && grid[2][0]==n)

        ){
      boardMsg(player+"won the game like a bawse!");
      haveWinner = 1;
      moveCounter = 0;
      $('#startButton').text("Play Again!");
      return true;
    }
    return false;
}



























