import { calculateWinner } from './calculateWinner';

export function computerIA({ squares }: { squares: SquaresType }) {
  // Check for winning move
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      squares[i] = 'o';
      if (calculateWinner(squares) === 'o') {
        return i;
      }
      squares[i] = null;
    }
  }

  // Check for blocking move
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      squares[i] = 'x';
      if (calculateWinner(squares) === 'x') {
        squares[i] = 'o';
        return i;
      }
      squares[i] = null;
    }
  }

  // Choose random move
  const emptySquares = [];
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      emptySquares.push(i);
    }
  }
  return emptySquares[Math.floor(Math.random() * emptySquares.length)];
}
