var turn = 0; // global variables turn zero
var player = 'X'; // starts with player one as 'X' always
var gameOver = false; // going to call this to stop the clickedy click function
var scores = { // keeping track of scores
  X: 0,
  O: 0
};

$(document).ready(function() {

  $('.tile').click(function() {  // function to take turns once tile is clicked
    if(gameOver) {
      return false;
    }
    if ( $(this).html() == '') { // empty tiles
      if (turn % 2 !== 0) { // easiest way to keep track of turns - one player odd, one even
        player = 'O'; // player O on odds turns
        } else {
          player = 'X';
        }
        $(this).html(player); // determines which player checking the tile
        if( checkWin() ){   // // checks win function, or to continue
          gameOver = true;
          $('.message').html(player + ' wins!'); // win
          // player = X;
          scores[ player ] += 1;
           $('.scorecard').html('X   -   ' + scores.X + '   :   O  -  ' + scores.O);

        } else if(turn === 8) {
          gameOver = true;
          $('.message').html('Draw!'); // draw
        }
        turn++; // continues to next turns until function completes
      }

  });

    $('.reset').click(function() { // reset button function
      $('.tile').html(''); // empty the tiles again
      $('.tile').removeClass('win'); // resets tiles style class
      $('.message').html('X Starts'); // resets the message to start message
      gameOver = false; //
      turn = 0; // resets turns to zero
    });

    function checkWin() {

      if ($('#tile1').html() === player && $('#tile2').html() === player && $('#tile3').html() === player ) {
        $('#tile1, #tile2, #tile3').addClass('win');
        // checks if player has checked tiles 1, 2, 3, if all equal, add class for WIN... ditto for below if's
        return true;
      } if ($('#tile4').html() === player && $('#tile5').html() === player && $('#tile6').html() === player ) {
        $('#tile4, #tile5, #tile6').addClass('win');
        return true;

      } if ($('#tile7').html() === player && $('#tile8').html() === player && $('#tile9').html() === player ) {
        $('#tile7, #tile8, #tile9').addClass('win');
        return true;

      } if ($('#tile1').html() === player && $('#tile4').html() === player && $('#tile7').html() === player ) {
        $('#tile1, #tile4, #tile7').addClass('win');
        return true;

      } if ($('#tile2').html() === player && $('#tile5').html() === player && $('#tile8').html() === player ) {
        $('#tile2, #tile5, #tile8').addClass('win');
        return true;

      } if ($('#tile3').html() === player && $('#tile6').html() === player && $('#tile9').html() === player ) {
        $('#tile3, #tile6, #tile9').addClass('win');
        return true;

      } if ($('#tile1').html() === player && $('#tile5').html() === player && $('#tile9').html() === player ) {
        $('#tile1, #tile5, #tile9').addClass('win');
        return true;

      } if ($('#tile3').html() === player && $('#tile5').html() === player && $('#tile7').html() === player ) {
        $('#tile3, #tile5, #tile7').addClass('win');
        return true;

      } //else { //if (turn === 8) { // call a draw after all tiles checked
      return false;  // returns false by default if none of the win conditions were found
    }// end checkWin()

  });// end document.ready

        // NEATER WAY TO CALL THE CHECKWIN FUNCTION BELOW:
        // not calling it as
        //
        // var board = [
        //   $('#tile1').html(),
        //   $('#tile2').html(),
        //   $('#tile3').html(),
        //   $('#tile4').html(),
        //   $('#tile5').html(),
        //   $('#tile6').html(),
        //   $('#tile7').html(),
        //   $('#tile8').html(),
        //   $('#tile9').html(),
        // ];
        //
        // var winStates = [
        //   board[0] + board[1] + board[2],
        //   board[3] + board[4] + board[5],
        //   board[6] + board[7] + board[8],
        //   board[0] + board[3] + board[6],
        //   board[1] + board[4] + board[7],
        //   board[2] + board[5] + board[8],
        //   board[0] + board[4] + board[8],
        //   board[2] + board[4] + board[6],
        // ];
        //
        // var winString = player + player + player;
        //
        // for (var i = 0; i < winStates.length; i++) {
        //   var win = winStates[i];
        //   if(win == winString){
        //     return true;
        //   }
        // }
        //





/*
// Tiled:

Selector for player x / o (or color/image - can make x/o images and make that more simple):
??? Not sure about selector
function select(player) {
  if(player == 1) {
    return 'x';
  } else {
    return 'o';
  }
};

(OR more simple would be Player X starts):

Allow consecutive turns:

function nextPlayer(player) {
  if(player == 1) {
    return player = 2;
  } else {
    return player = 1;
  }
};

RESET Button - function:

$('.reset').click(function() {
});

checkWin function if:

tile1 && tile2 && tile3 | tile4 && tile5 && tle6 | tile7 && tile8 && tile9 | tile1 && tile4 && tile7 | tile2 && tile5 && tile8 | tile3 && tile6 && tile9 | tile1 && tile5 && tile9 | tile3 && tile5 && tile7
( alert(player + ' WON!'); )

else draw ( alert("DRAW!"); )

OR, shorter, array the win combo's and check gameOver status:

var checkWin = function() {
  var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                          [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]
                        };

*/
