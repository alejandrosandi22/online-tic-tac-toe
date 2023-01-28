import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AppLayout({ children, title }: AppLayoutProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta
          name='description'
          content='Tic Tac Toe is a simple, two-players game in wich players take turns making a grid of 3x3 squares with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical or diagonal row wins the game.'
        />
        <meta name='author' content='Alejandro Sandí' />
        <meta
          name='keywords'
          content='tic tac toe, tres en raya, gato, multiplayer game, play with friends'
        />
        <title>{title}</title>
        <link rel='icon' href='/favicon.svg' type='svg/x-icon' />
        <link rel='manifest' href='/manifest.json' />
        <link
          href='/icons/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/icons/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <style jsx global>{`
        html,
        body {
          font-family: ${inter.style.fontFamily}, Roboto, system-ui,
            -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu,
            Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
      {children}
    </>
  );
}
