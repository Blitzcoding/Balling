const game = new Chess();

const board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: (source, target) => {
    const move = game.move({
      from: source,
      to: target,
      promotion: 'q' // auto-promote to queen
    });

    if (move === null) return 'snapback';

    updateStatus();
  }
});

function updateStatus() {
  let status = '';

  if (game.in_checkmate()) {
    status = 'Checkmate! ' + (game.turn() === 'w' ? 'Black' : 'White') + ' wins.';
  } else if (game.in_draw()) {
    status = 'Draw!';
  } else {
    status = (game.turn() === 'w' ? 'White' : 'Black') + ' to move';
    if (game.in_check()) {
      status += ', in check!';
    }
  }

  document.getElementById('status').textContent = status;
}

updateStatus();

