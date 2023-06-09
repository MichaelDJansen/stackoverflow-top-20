import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading state', () => {
  render(<App />);

  const loadingElement = screen.getByTestId('loading-spinner');
  expect(loadingElement).toBeInTheDocument();
});
