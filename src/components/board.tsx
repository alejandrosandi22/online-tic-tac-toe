import GamePanel from 'components/gamePanel';
import React, { useEffect, useState } from 'react';
import { calculateWinner } from 'utils/calculateWinner';
import { computerIA } from 'utils/computerIA';
import EndGame from './modals/endGame';
import Modal from './shared/modal';
import Square from './square';

const DEFAULT_RESULTS: ResultsType = {
  x: 0,
  o: 0,
  draw: 0,
};

function Board({ playersData }: BoardProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [player, setPlayer] = useState<PlayersType>(
    playersData.gameTokenPlayer1
  );
  const [squares, setSquares] = useState<SquaresType>(Array(9).fill(null));
  const [results, setResults] = useState<ResultsType>(DEFAULT_RESULTS);
  const [winner, setWinner] = useState<'x' | 'o' | 'tie' | null>(null);

  const handlePlayAgain = () => {
    setPlayer(playersData.gameTokenPlayer1);
    setSquares(Array(9).fill(null));
    setWinner(null);
  };

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    if (calculateWinner(squares)) {
      setWinner(player === 'x' ? 'o' : 'x');
      setResults({
        ...results,
        [player === 'x' ? 'o' : 'x']: results[player === 'x' ? 'o' : 'x'] + 1,
      });
      return;
    }

    if (squares.find((sqaure) => sqaure === null) === undefined) {
      setWinner('tie');
      setResults({ ...results, draw: results.draw + 1 });
      return;
    }

    if (
      playersData.gameMode === 'local' &&
      player === playersData.gameTokenPlayer2
    ) {
      setTimeout(() => {
        const index = computerIA({ squares });
        squares[index] = player === 'x' ? 'x' : 'o';
        setSquares(squares);
        setPlayer(player === 'x' ? 'o' : 'x');
      }, 500);
    }
  }, [player]);

  const handleClickSquare = (i: number) => {
    if (calculateWinner(squares) || squares[i] !== null) return;

    if (playersData.gameMode === 'local') {
      if (player === playersData.gameTokenPlayer1) {
        squares[i] = player === 'x' ? 'x' : 'o';
        setSquares(squares);
        setPlayer(playersData.gameTokenPlayer2);
      }
    } else {
      squares[i] = player === 'x' ? 'x' : 'o';
      setSquares(squares);
      setPlayer(player === 'x' ? 'o' : 'x');
    }
  };

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClickSquare(i)} />;
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-8'>
        <div className='space-y-1 bg-gray-300 mb-2'>
          <div className='flex gap-1'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className='flex gap-1'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className='flex gap-1'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <GamePanel results={results} />
      </div>
      <Modal show={!winner ? false : true} setShow={setWinner}>
        <EndGame winner={winner} handlePlayAgain={handlePlayAgain} />
      </Modal>
    </>
  );
}

export default React.memo(Board);
