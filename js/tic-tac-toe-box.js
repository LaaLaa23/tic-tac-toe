$(document).ready(function() {
  console.log('hello');

});


/*
// Tiled:

Selector for player x / o (or color/image - can make x/o images and make that more simple):

function select(player) {
  if(player == 1) {
    return 'x';
  } else {
    return 'o';
  }
};

(OR more simple would be Player X starts)

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
  player = 1;
  messages.html('');
  reset(table);
  displayNextPlayer(turn, player);
});

checkWin function if:

tile1 && tile2 && tile3 | tile4 && tile5 && tle6 | tile7 && tile8 && tile9 | tile1 && tile4 && tile7 | tile2 && tile5 && tile8 | tile3 && tile6 && tile9 | tile1 && tile5 && tile9 | tile3 && tile5 && tile7
( alert(Player + ' WON!'); )

else draw ( alert("DRAW!"); )

OR, shorter, array the win combo's and check gameOver status:

var gameOver = function() {
  var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                          [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ],
      winIndex = -1;
  $.each( winCombinations, function( index, winCombination ) {
    if( allEqual( winCombination ) ){
      winIndex = index;
      return false;
    }
  });
  if( winIndex !== -1 ) {
    return winCombinations[ winIndex ];
  } else if ( moves === 9 ) {
    return true;
  } else {
    return false;
  }
};
*/
