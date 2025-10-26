// components/ErrorBoundary.tsx
import React, { ReactNode } from 'react';
import * as Sentry from '@sentry/react';

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to console for local debugging
    // eslint-disable-next-line no-console
    console.log('ErrorBoundary caught:', { error, errorInfo });

    // Report to Sentry (if initialized)
    if (Sentry && typeof Sentry.captureException === 'function') {
      Sentry.captureException(error, { extra: errorInfo });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, textAlign: 'center' }}>
          <h2>Oops, there is an error!</h2>
          <p>Something went wrong. Try reloading or click the button below.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: '8px 12px',
              borderRadius: 6,
              border: '1px solid #ccc',
              background: 'white',
              cursor: 'pointer',
            }}
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
