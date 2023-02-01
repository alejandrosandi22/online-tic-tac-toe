import AppHeader from 'components/appHeader';
import GameModes from 'components/gameModes';
import AppLayout from 'layouts/appLayout';
import { playerO, playerX } from 'utils/gameTokens';

function Square({ value }: { value: PlayersType }) {
  return (
    <div className='bg-white w-[122px] h-[122px] grid place-items-center'>
      {value === 'x' ? playerX('w-16 h-16') : playerO('w-16 h-16')}
    </div>
  );
}

export default function Home() {
  return (
    <AppLayout title='Tic Tac Toe'>
      <div className='flex flex-col items-center pb-5'>
        <AppHeader />
        <div className='space-y-1 bg-gray-300 mb-16 mt-5'>
          <div className='flex gap-1'>
            <Square value='o' />
            <Square value='x' />
            <Square value='x' />
          </div>
          <div className='flex gap-1'>
            <Square value='x' />
            <Square value='o' />
            <Square value='o' />
          </div>
          <div className='flex gap-1'>
            <Square value='x' />
            <Square value='o' />
            <Square value='x' />
          </div>
        </div>
        <GameModes />
      </div>
    </AppLayout>
  );
}
