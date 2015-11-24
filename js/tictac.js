// var player1 = "";
// var player2 = "";
// var turn = "";
// var gameGrid = [[0,0,0],[0,0,0],[0,0,0]];
// var moveCounter = 0;
// var haveWinner = 0;

// // whoseTurn Decides who goes first! (math.floor rounds down!)
// var whoseTurn = function (){
//   var decider = math.floor((math.random()* 2) + 1 );
//   haveWinner = 0 ;
//   if (decider == 1){
//     turn = player1;
//     boardMsg(player1 + "'s turn now! Make your move! surely you're smarter than" + player2);
//   } else {
//     turn = player2;
//     boardMsg(player2+"'s turn now! believe in yo self. Smash"+ player1);
//   }
// }

var player1="" , player2="", turn = "";
var grid =  [[0,0,0],[0,0,0],[0,0,0]];
var hasWinner = 0, moveCount=0;

var boardMsg = function(x){
    return $("#boardDisplay").text(x);
}
var setTurn = function(){
    var r = Math.floor((Math.random() * 2) + 1);
    hasWinner=0;
    if(r==1){
        turn = player1;
        boardMsg(player1+"'s turn now!");
    }
    else{
        turn = player2;
        boardMsg(player2+"'s turn now!");
    }
}
var init = function(){
        turn = "";
        grid =  [[0,0,0],[0,0,0],[0,0,0]];
        boardMsg("");
        $(".col").map(function() {
            $(this).text("");
        }).get();
        hasWinner = 0;
        moveCount=0;
}
$("#playButton").click(function (){

    if(hasWinner==1){
        init();
    }

    player1 = $("#player-1-inp").val();
    player2 = $("#player-2-inp").val();

    if(player1=="" || player2==""){
        alert("Please set player all the names.");
        return;
    }

    setTurn();
});
$(".col").click(function (){

    if(player1=="" || player2==""){
        alert("Please set player all the names.");
        return;
    }

    var row = $(this).parent().index();
    var col = $(this).index();

    if(grid[row][col]!==0){
        alert("This position is taken. Please try other position.");
        return;
    }
    if(hasWinner==1){
        alert("Please click play again");
        return;
    }

    if(turn==player1){
        moveCount++;
        $(this).text("O");
        grid[row][col] = 1;
        var ifWon = winnerCheck(1,player1);
        if(!ifWon){
            if(moveCount>=9){
                boardMsg("Match Drawn!");
                moveCount=0;
                $("#playButton").text("Play again");
                hasWinner=1;
                return;
            }else{
                turn = player2;
                boardMsg(player2+"'s turn now!");
            }
            return;    
        }
        else{
            return;
        }        
    }
    else if(turn==player2){
        moveCount++;
        $(this).text("X");
        grid[row][col] = 2;
        var ifWon = winnerCheck(2,player2);
        if(!ifWon){
            if(moveCount>=9){
                boardMsg(player1 + "and" + player2+ "TIED!");
                moveCount=0;
                $("#playButton").text("Play again");
                hasWinner=1;
                return;
            }else{
                turn = player1;
                boardMsg(player1+"'s turn now!");
            }
            return;    
        }
        else{
            return;
        }        
    }
});
var winnerCheck = function(n,playerName){
    if(

        (grid[0][0]==n && grid[0][1]==n && grid[0][2]==n) ||
        (grid[1][0]==n && grid[1][1]==n && grid[1][2]==n) ||
        (grid[2][0]==n && grid[2][1]==n && grid[2][2]==n) ||

        (grid[0][0]==n && grid[1][0]==n && grid[2][0]==n) ||
        (grid[0][1]==n && grid[1][1]==n && grid[2][1]==n) ||
        (grid[0][2]==n && grid[1][2]==n && grid[2][2]==n) ||

        (grid[0][0]==n && grid[1][1]==n && grid[2][2]==n)||
        (grid[0][2]==n && grid[1][1]==n && grid[2][0]==n)


        ){
        boardMsg(playerName+" won the game!");
        hasWinner = 1;
        moveCount=0;
        $("#playButton").text("Play again");
        return true;
    }
    return false;
}