import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Logo } from '..';
import Wrapper from '../../../../tests/wrapper';

describe('Logo component', () => {
  test('should render CelebrationOutlined icon and text', async () => {
    render(
      <Wrapper>
        <Logo isDesktop />
      </Wrapper>,
    );

    const icon = await screen.findByTestId('logo-icon');
    const text = await screen.findByTestId('logo-text');

    expect(icon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
