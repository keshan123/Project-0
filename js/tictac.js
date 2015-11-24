var player1 = "";
var player2 = "";
var turn = "";
var gameGrid = [[0,0,0],[0,0,0],[0,0,0]];
var moveCounter = 0;
var haveWinner = 0;

// whoseTurn Decides who goes first! (math.floor rounds down!)
var whoseTurn = function (){
  var decider = math.floor((math.random()* 2) + 1 );
  haveWinner = 0 ;
  if (decider == 1){
    turn = player1;
    boardMsg(player1 + "'s turn now! Make your move! surely you're smarter than" + player2);
  } else {
    turn = player2;
    boardMsg(player2+"'s turn now! believe in yo self. Smash"+ player1);
  }
}
