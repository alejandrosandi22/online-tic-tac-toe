import 'styles/globals.css';
import { AppProps } from 'next/app';
import PlayersDataProvider from 'context/playersData';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayersDataProvider>
      <Component {...pageProps} />
    </PlayersDataProvider>
  );
}
