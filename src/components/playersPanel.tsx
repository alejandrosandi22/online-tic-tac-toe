import OfflinePlayerCard from './shared/offlinePlayerCard';
import OnlinePlayerCard from './shared/onlinePlayerCard';

export default function PlayersPanel() {
  return (
    <div className='flex gap-16'>
      <OnlinePlayerCard />
      <p className='font-bold text-lg'>vs</p>
      <OfflinePlayerCard />
    </div>
  );
}
