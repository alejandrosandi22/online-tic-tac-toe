import AppHeader from 'components/appHeader';
import Dashboard from 'components/dashboard';
import GameModes from 'components/gameModes';
import GamePanel from 'components/gamePanel';
import PlayersPanel from 'components/playersPanel';
import AppLayout from 'layouts/appLayout';

export default function Home() {
  return (
    <AppLayout title='Tic Tac Toe'>
      <div className='flex flex-col items-center space-y-24'>
        <AppHeader />
        <PlayersPanel />
        <Dashboard />
        <GamePanel />
        <GameModes />
      </div>
    </AppLayout>
  );
}
