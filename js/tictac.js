var player1 = "",
    player2 = "",
    turn = "";
var grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var hasWinner = 0,
    moveCount = 0;
//preparing a function to change to board message!
var boardMsg = function(x) {
    return $("#boardDisplay").text(x);
}
var setTurn = function() {
        var r = Math.floor((Math.random() * 2) + 1);
        hasWinner = 0;
        if (r == 1) {
            turn = player1;
            boardMsg(player1 + "'s turn now!");
        } else {
            turn = player2;
            boardMsg(player2 + "'s turn now!");
        }
    }
    //Initiating the game! (.map creates a new array with the results of calling a provided function in every element)
var init = function() {
        turn = "";
        grid = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        boardMsg("");
        $(".col").map(function() {
            $(this).text("");
        }).get();
        hasWinner = 0;
        moveCount = 0;
    } // creating playbutton event listener
$("#playButton").click(function() {

    if (hasWinner == 1) {
        init();
    }

    player1 = $("#player-1-inp").val();
    player2 = $("#player-2-inp").val();

    if (player1 == "" || player2 == "") {
        alert("Please set player all the names.");
        return;
    }

    setTurn();
});
//adding functionality to the colums! (.col)
$(".col").click(function() {

    if (player1 == "" || player2 == "") {
        alert("Please set player all the names.");
        return;
    }
    // .parent() is the parent of the element. .index() indicates the position of an element.

    var row = $(this).parent().index();
    var col = $(this).index();

    if (grid[row][col] !== 0) {
        alert("This position is taken. Please try other position.");
        return;
    }
    if (hasWinner == 1) {
        alert("Please click play again");
        return;
    }

    if (turn == player1) {
        //This counter is for calculating ties later (you can ignore)
        moveCount++;
        $(this).text("O");
        grid[row][col] = 1;
        var ifWon = winnerCheck(1, player1);
        if (!ifWon) {
            if (moveCount >= 9) {
                boardMsg("Match Drawn!");
                moveCount = 0;
                $("#playButton").text("Play again");
                hasWinner = 1;
                return;
            } else {
                turn = player2;
                boardMsg(player2 + "'s turn now!");
            }
            return;
        } else {
            return;
        }
    } else if (turn == player2) {
        moveCount++;
        $(this).text("X");
        grid[row][col] = 2;
        var ifWon = winnerCheck(2, player2);
        if (!ifWon) {
            if (moveCount >= 9) {
                boardMsg(player1 + "and" + player2 + "TIED!");
                moveCount = 0;
                $("#playButton").text("Play again");
                hasWinner = 1;
                return;
            } else {
                turn = player1;
                boardMsg(player1 + "'s turn now!");
            }
            return;
        } else {
            return;
        }
    }
});
var winnerCheck = function(n, playerName) {
    if (
        //ROW CHECK
        (grid[0][0] == n && grid[0][1] == n && grid[0][2] == n) ||
        (grid[1][0] == n && grid[1][1] == n && grid[1][2] == n) ||
        (grid[2][0] == n && grid[2][1] == n && grid[2][2] == n) ||
        //COLUMN CHECK
        (grid[0][0] == n && grid[1][0] == n && grid[2][0] == n) ||
        (grid[0][1] == n && grid[1][1] == n && grid[2][1] == n) ||
        (grid[0][2] == n && grid[1][2] == n && grid[2][2] == n) ||
        //DIAGONAL CHECK
        (grid[0][0] == n && grid[1][1] == n && grid[2][2] == n) ||
        (grid[0][2] == n && grid[1][1] == n && grid[2][0] == n)


    ) {
        boardMsg(playerName + " won the game!");
        hasWinner = 1;
        moveCount = 0;
        $("#playButton").text("Play again");
        return true;
    }
    return false;
}