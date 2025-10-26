// pages/index.tsx
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorProneComponent from '../components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Home Page</h1>
      <p>This page will intentionally throw an error below:</p>
      
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
