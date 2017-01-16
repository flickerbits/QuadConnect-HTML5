function GamePiece(x, y, player, stroke) {
  this.x = x;
  this.y = y;
  this.player = player;
  this.radius = 25;
  this.stroke = stroke;

  this.show  = function() {
    var color;
    if (this.player === 1) { color = 'red' }; // player 1 = RED
    if (this.player === -1) { color = 'yellow' }; // player 2 = YELLOW
    if (this.player === 0) { color = 'grey' }; // empty space = GREY
    this.drawCircle(this.x, this.y, this.radius + this.stroke, 'black'); // draw stroke
    this.drawCircle(this.x, this.y, this.radius, color); // draw gamePiece
  }

  this.move = function(dir) {
    // prevent currentPiece from moving off screen
    if(this.x + (dir * spacing) > 0 && this.x + (dir * spacing) < canvas.width) {
      this.x += dir * spacing;
      currentCol += dir;
    }
  }

  this.changePlayer = function() {
    if (this.player === 0) {
      this.player = currentPlayer;
    } else {
      this.player *= -1;
    }
  }

  this.drawCircle = function(x, y, radius, color) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, 0, Math.PI*2, true);
    canvasContext.fill();
  }
}
