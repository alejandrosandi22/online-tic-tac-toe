import Link from 'next/link';
import { playerO, playerX } from 'utils/gameTokens';

interface EndGameProps {
  winner: 'x' | 'o' | 'tie' | null;
  handlePlayAgain: () => void;
}

export default function EndGame({ winner, handlePlayAgain }: EndGameProps) {
  return (
    <div className='w-full lg:w-[508px] bg-white rounded-md px-8 py-10 flex flex-col items-center justify-center border border-gray-300'>
      <div className='font-extrabold text-primary-900 text-3xl mb-6 text-center'>
        {winner === 'x' && playerX('w-10 h-10')}
        {winner === 'o' && playerO('w-10 h-10')}
        {winner === 'tie' && (
          <div className='flex items-center gap-3'>
            {playerX('w-9 h-9')} {playerO('w-10 h-10')}
          </div>
        )}
      </div>
      <p className='font-extrabold text-primary-900 text-3xl mb-10 text-center'>
        ¡{winner === 'tie' ? 'TIE' : 'WIN'}!
      </p>
      <div className='flex gap-2'>
        <button
          onClick={handlePlayAgain}
          className='inline-block px-8 py-3 bg-primary-400 hover:bg-primary-500 text-base text-white rounded-md'
        >
          Play again
        </button>
        <Link
          href='/'
          className='inline-block px-8 py-3 bg-primary-400 hover:bg-primary-500 text-base text-white rounded-md'
        >
          Get out
        </Link>
      </div>
    </div>
  );
}
