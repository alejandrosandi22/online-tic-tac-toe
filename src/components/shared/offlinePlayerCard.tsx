import { playerO, playerX } from 'utils/gameTokens';

interface OfflinePlayerCardProps {
  name: string;
  gameToken: string;
}

export default function OfflinePlayerCard({
  name,
  gameToken,
}: OfflinePlayerCardProps) {
  return (
    <div className='flex flex-col items-center gap-1'>
      <div className='grid place-items-center w-12 h-12 rounded-full border border-gray-300'>
        {gameToken === 'x' ? playerX('w-5 h-5') : playerO('w-5 h-5')}
      </div>
      <div className='flex flex-col'>
        <p className='text-base font-medium'>{name}</p>
      </div>
    </div>
  );
}
