// sentry.client.ts
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN || ''; // set this in your env

if (dsn) {
  Sentry.init({
    dsn,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 0.0, // set >0.0 if you want performance tracing (0.0 disables)
    // release: process.env.NEXT_PUBLIC_RELEASE, // optional
    // environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || 'development',
  });
}
