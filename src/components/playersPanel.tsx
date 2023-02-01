import OfflinePlayerCard from './shared/offlinePlayerCard';
import OnlinePlayerCard from './shared/onlinePlayerCard';

export default function PlayersPanel({ local }: PlayersPanelProps) {
  return (
    <div className='flex items-center gap-16'>
      {local ? (
        <OfflinePlayerCard
          name={local.player1}
          gameToken={local.gameTokenPlayer1}
        />
      ) : (
        <OnlinePlayerCard />
      )}
      <p className='font-medium text-base'>vs</p>
      {local ? (
        <OfflinePlayerCard
          name={local.player2}
          gameToken={local.gameTokenPlayer2}
        />
      ) : (
        <OnlinePlayerCard />
      )}
    </div>
  );
}
