// pages/_app.tsx
import '../styles/globals.css'; // keep if your project has this file; otherwise it's fine to keep the import
import type { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
