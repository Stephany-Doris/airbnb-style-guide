import { render, screen } from '@testing-library/react';
import App from './App';

test('renders source code link', () => {
  render(<App />);
  const linkElement = screen.getByText(/View source code/i);
  expect(linkElement).toBeInTheDocument();
});
