import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getYear } from 'date-fns';
import { Footer } from '..';
import Wrapper from '../../../../tests/wrapper';

describe('Footer', () => {
  const setup = () => {
    render(
      <Wrapper>
        <Footer />
      </Wrapper>,
    );
  };

  test('renders footer correctly', () => {
    setup();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('displays current year in the footer', () => {
    setup();
    const currentYear = getYear(new Date());
    expect(screen.getByText(`© ${currentYear} Events`)).toBeInTheDocument();
  });
});
