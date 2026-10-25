// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenVerve title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenVerve/i);
    expect(titleElement).toBeInTheDocument();
});
