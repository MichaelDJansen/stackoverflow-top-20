import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe("Loading Spinner" ,() => {
  test('renders loading spinner', () => {
    render(<LoadingSpinner />);
  
    const component = screen.getByTestId('loading-spinner');
  
    expect(component).toBeInTheDocument();
  });
})
