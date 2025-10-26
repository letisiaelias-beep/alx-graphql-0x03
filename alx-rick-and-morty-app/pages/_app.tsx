// pages/_app.tsx
import '../styles/globals.css'; // keep this if your project has it (no-op if the file doesn't exist)
import type { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary'; // relative import to avoid alias issues

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
