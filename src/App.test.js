import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el título principal', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});

test('muestra el nombre del curso', () => {
  render(<App />);
  expect(screen.getByText(/Proceso de Desarrollo de Software/i)).toBeInTheDocument();
});
