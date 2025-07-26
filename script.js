const board = document.getElementById('chessboard');
const pieces = {
  r: '♜', n: '♞', b: '♝', q: '♛', k: '♚', p: '♟',
  R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔', P: '♙'
};

const initialBoard = [
  'r','n','b','q','k','b','n','r',
  'p','p','p','p','p','p','p','p',
  '','','','','','','','',
  '','','','','','','','',
  '','','','','','','','',
  '','','','','','','','',
  'P','P','P','P','P','P','P','P',
  'R','N','B','Q','K','B','N','R'
];

for (let i = 0; i < 64; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.classList.add((Math.floor(i / 8) + i) % 2 === 0 ? 'white' : 'black');
  square.textContent = pieces[initialBoard[i]] || '';
  board.appendChild(square);
}
