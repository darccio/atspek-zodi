import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { ***REMOVED***_TITLE } from './constants/strings'

test('renders App component', () => {
  render(<App />)
  const linkElement = screen.getByText(***REMOVED***_TITLE)
  expect(linkElement).toBeInTheDocument()
})
