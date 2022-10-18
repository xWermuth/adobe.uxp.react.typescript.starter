import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Heading from './Heading';

describe('Heading: ', () => {
  afterEach(cleanup);

  it('should show a header with the text: "Hello world"', () => {
    const text = 'Hello world';
    render(<Heading>{text}</Heading>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
