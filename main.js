
var canvas;
var canvasContext;
var columns;
var currentPiece;
var currentPlayer = 1;
var currentCol = 0;
var spacing = 60;
var winner = false;
var bg = 'blue';
var playerPiece;

window.onload = function() {
  canvas = document.getElementById('gameBoard');
  canvasContext = canvas.getContext('2d');
  canvasContext.fillStyle = bg;
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  // var framesPerSecond = 30;
  // setInterval(function() {
  //   moveAll();
  //   drawAll();
  // }, 1000 / framesPerSecond);

  playerPiece = new GamePiece(40, 95, currentPlayer, 2);
  playerPiece.show();
  reset();
  redrawAll();

  window.addEventListener('keydown',
    function(evt) {
      console.log(evt.key);
      if (evt.key === 'ArrowUp') { reset() };
      if (evt.key === 'ArrowRight') { playerPiece.move(1) };
      if (evt.key === 'ArrowLeft') { playerPiece.move(-1) };
      redrawAll();
    });
}

function moveAll() {

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
  // fill columns with 'empty' gray game pieces to initialize game
  for (var i = 0; i < 7; i++) {
    columns[i]= [];
    for (var j = 0; j < 6; j++) {
      var gamePiece = new GamePiece(x, y - (j * spacing), 0, 2);
      columns[i].push(gamePiece);
    }
    x += spacing;
  }      
}
