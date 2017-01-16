function checkWinner(col, row) {
  var winArray = [];
  
  // check current COLUMN for winner
  for (var i = 0; i < 6; i++) {
    if (columns[col][i].player === currentPlayer) {
      winArray.push(columns[col][i]);
      if (winArray.length === 4) {
        renderWinners(winArray);
        return true; 
      }
    } else winArray = [];
  }

  // check current ROW for winner
  winArray = [];
  for (var j = 0; j < 7; j++) {
    if (columns[j][row].player === currentPlayer) {
      winArray.push(columns[j][row]);
      if (winArray.length === 4) {
        renderWinners(winArray);
        return true;
      }
    } else winArray = [];
  }

  // check only diagonal Forwardslash that intersects location
  winArray = [];
  var base = col - row;
  if (base >= 0 && base < 4) {
    for (var k = 0; k < 6; k++) {
      if (columns[base + k] && columns[base + k][k].player === currentPlayer) {
        winArray.push(columns[base + k][k]);
        if (winArray.length === 4) {
          renderWinners(winArray);
          return true;
        } 
      } else winArray = [];
    }
  } else {
    base = row - col;
    if (base > 0 && base < 3) {
      for (var l = 0; l < 6; l++) {
        if (columns[l][base + l] && columns[l][base + l].player === currentPlayer) {
          winArray.push(columns[l][base + l]);
          if (winArray.length === 4) {
            renderWinners(winArray);
            return true;
          } 
        } else winArray = [];
      }
    }
  }

  // check only diagonal Backslash that intersects location
  winArray = [];
  base = col + row;
  if (base > 2 && base < 9) {
    for (var m = 0; m < 6; m++) {
      if (columns[base - m] && columns[base - m][m].player === currentPlayer) {
        winArray.push(columns[base - m][m]);
        if (winArray.length === 4) {
          renderWinners(winArray);
          return true;
        } 
      } else winArray = [];
    }
  }
  return false;
}

function renderWinners(arr) {
  arr.forEach (function(e) {
    e.stroke = 5;
  });
};
