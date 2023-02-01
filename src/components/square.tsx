import { playerO, playerX } from 'utils/gameTokens';

export default function Square({ onClick, value }: SquareProps) {
  return (
    <button
      className='bg-white w-[122px] h-[122px] grid place-items-center'
      onClick={onClick}
    >
      {value === 'o' && playerO('w-16 h-16')}
      {value === 'x' && playerX('w-16 h-16')}
    </button>
  );
}
