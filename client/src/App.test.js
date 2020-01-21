import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test("Renders without crashing", () => {
  render(<App />);
});

test("App has header", () => {
  const app = render(<App />);
  expect(app.queryByText(/Select Your Favorite Players/i)).toBeInTheDocument();
});

test("App has Players", () => {
  const app = render(<App />);
  expect(app.getByTestId("Players")).toBeInTheDocument();
});