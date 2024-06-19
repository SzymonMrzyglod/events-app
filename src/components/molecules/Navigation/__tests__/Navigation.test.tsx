import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navigation } from '..';
import Wrapper from '../../../../tests/wrapper';

describe('Navigation', () => {
  const setup = () => {
    render(
      <Wrapper>
        <Navigation isDesktop />
      </Wrapper>,
    );
  };
  test('renders desktop navigation correctly', () => {
    setup();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Events' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Calendar' })).toBeInTheDocument();
  });
});
