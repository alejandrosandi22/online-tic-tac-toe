import Board from 'components/board';
import PlayersPanel from 'components/playersPanel';
import AppLayout from 'layouts/appLayout';
import { useContext, useEffect } from 'react';
import { PlayersDataContext } from 'context/playersData';
import { useRouter } from 'next/router';
import AppHeader from 'components/appHeader';

export default function Play() {
  const { playersData } = useContext(PlayersDataContext);
  const router = useRouter();

  useEffect(() => {
    if (!playersData.gameStatus) router.push('/');
  }, []);

  if (!playersData.gameStatus) return <div>Loading</div>;

  return (
    <AppLayout title='Play | Tic Tac Toe'>
      <AppHeader />
      <div className='flex flex-col items-center space-y-11 py-8 lg:pt-0 pb-8'>
        <PlayersPanel local={playersData} />
        <Board playersData={playersData} />
      </div>
    </AppLayout>
  );
}
