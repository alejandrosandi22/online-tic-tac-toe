type PlayersType = 'x' | 'o';
type SquaresType = Array<'x' | 'o' | null>;

interface ComputerIAProps {
  squares: SquaresType;
  setPlayer: Dispatch<SetStateAction<PlayersType>>;
  player: PlayersType;
  setSquares: Dispatch<SetStateAction<SquaresType>>;
}

interface SquareProps {
  onClick: () => void;
  value: 'x' | 'o' | null;
}

interface BoardProps {
  playersData: ContextValuesType;
}

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

interface PortalProps {
  children: ReactNode;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

interface GameModeType {
  gameMode: 'local' | 'multiplayer' | 'online';
}

interface ResultsType {
  x: number;
  o: number;
  draw: number;
}

interface BoxProps {
  onClick: () => void;
  value: 'x' | 'o' | null;
}

interface ContextValuesType {
  gameStatus: boolean;
  gameMode: 'local' | 'multiplayer' | 'online';
  player1: string;
  gameTokenPlayer1: 'x' | 'o';
  player2: string;
  gameTokenPlayer2: 'x' | 'o';
}

interface ContextPlayersDataType {
  playersData: ContextValuesType;
  handleSetPlayersData: (data: ContextValuesType) => void;
}

interface PlayersDataProviderProps {
  children: React.ReactNode;
}

interface PlayersPanelProps {
  local?: ContextValuesType;
  online?: string;
}
