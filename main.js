
var canvas;
var canvasContext;
var columns;
var playerPiece;
var currentPlayer = 1;
var currentCol = 0;
var spacing = 60;
var winner = false;
var bg = 'blue';

window.onload = function() {
  canvas = document.getElementById('gameBoard');
  canvasContext = canvas.getContext('2d');
  canvasContext.fillStyle = bg;
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  playerPiece = new GamePiece(40, 95, currentPlayer, 1);
  playerPiece.show();
  reset();
  redrawAll();

  window.addEventListener('keydown',
    function(evt) {
      if (evt.key === 'ArrowUp') { reset() };
      if (evt.key === 'ArrowRight') { playerPiece.move(1) };
      if (evt.key === 'ArrowLeft') { playerPiece.move(-1) };
      if (evt.key === 'ArrowDown') {
        var flag = 0;
        for (var i =  0; i < columns[currentCol].length; i++) {
          if (columns[currentCol][i].player === 0 && flag === 0) {
            columns[currentCol][i].changePlayer();
            flag = 1;
            if (checkWinner(currentCol, i)) {
              // change background to orange when there is a winner
              bg = 'orange';
              winner = true;
            }
            playerPiece.changePlayer();
            currentPlayer *= -1;
          }
        }
      };
      redrawAll();
    });
}

function redrawAll() {
  canvasContext.fillStyle = bg;
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  playerPiece.show();
  for (var i = 0; i < columns.length; i++) {
    for (var j = 0; j < columns[i].length; j++) {
      columns[i][j].show();
    }
  }
}

function reset() {
  columns = [];
  bg = 'blue';
  winner = false;
  x = 40;
  y = 455;
  // fill columns with 'empty' grey game pieces to initialize game
  for (var i = 0; i < 7; i++) {
    columns[i]= [];
    for (var j = 0; j < 6; j++) {
      var gamePiece = new GamePiece(x, y - (j * spacing), 0, 1);
      columns[i].push(gamePiece);
    }
    x += spacing;
  }      
}
