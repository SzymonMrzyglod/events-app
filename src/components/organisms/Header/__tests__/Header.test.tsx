import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from '..';
import Wrapper from '../../../../tests/wrapper';

describe('Header', () => {
  test('renders header correctly', () => {
    render(
      <Wrapper>
        <Header />
      </Wrapper>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
