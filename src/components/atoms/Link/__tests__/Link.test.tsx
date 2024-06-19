import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Link } from '..';
import Wrapper from '../../../../tests/wrapper';

const linkProps = {
  name: 'Test',
  href: '/test',
};

describe('Link component', () => {
  test('should render link with correct styles and content', async () => {
    render(
      <Wrapper>
        <Link name={linkProps.name} href={linkProps.href} />
      </Wrapper>,
    );

    const link = await screen.findByTestId('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveStyle('color: rgb(53, 53, 53)');
    expect(link).toHaveStyle('text-decoration: none');
    expect(link.getAttribute('href')).toBe(linkProps.href);
  });
});
