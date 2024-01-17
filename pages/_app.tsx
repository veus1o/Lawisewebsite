import { AppProps } from 'next/app';
import '../src/app/globals.css'; // Adjust the path according to your project structure

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;