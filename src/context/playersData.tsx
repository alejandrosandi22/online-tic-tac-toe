import { createContext, useState } from 'react';

const DEFAULT_VALUES: ContextValuesType = {
  gameStatus: false,
  gameMode: 'local',
  player1: 'Player #1',
  gameTokenPlayer1: 'x',
  player2: 'Computer',
  gameTokenPlayer2: 'o',
};

const DEFAULT_PLAYER_DATA: ContextPlayersDataType = {
  handleSetPlayersData() {
    // Empty function
  },
  playersData: DEFAULT_VALUES,
};

export const PlayersDataContext =
  createContext<ContextPlayersDataType>(DEFAULT_PLAYER_DATA);

export default function PlayersDataProvider({
  children,
}: PlayersDataProviderProps) {
  const [playersData, setPlayersData] =
    useState<ContextValuesType>(DEFAULT_VALUES);

  const handleSetPlayersData = (data: ContextValuesType) =>
    setPlayersData(data);

  return (
    <PlayersDataContext.Provider value={{ playersData, handleSetPlayersData }}>
      {children}
    </PlayersDataContext.Provider>
  );
}
