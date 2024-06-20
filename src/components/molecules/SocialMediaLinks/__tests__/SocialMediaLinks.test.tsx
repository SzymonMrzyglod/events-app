import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SocialMediaLinks } from '..';
import Wrapper from '../../../../tests/wrapper';

describe('SocialMediaLinks', () => {
  const setup = () => {
    render(
      <Wrapper>
        <SocialMediaLinks />
      </Wrapper>,
    );
  };

  test('renders social media links correctly', () => {
    setup();
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'x' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
  });

  test('each social media link has the correct href attribute', () => {
    setup();
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://www.facebook.com',
    );
    expect(screen.getByRole('link', { name: 'x' })).toHaveAttribute('href', 'https://www.x.com');
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://www.instagram.com',
    );
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com',
    );
  });

  test('each social media link opens in a new tab', () => {
    setup();
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: 'x' })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('target', '_blank');
  });

  test('each social media link has the correct rel attribute', () => {
    setup();
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
    expect(screen.getByRole('link', { name: 'x' })).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
  });

  test('each social media link has an icon', () => {
    setup();
    expect(screen.getByRole('link', { name: 'Facebook' }).querySelector('svg')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'x' }).querySelector('svg')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Instagram' }).querySelector('svg'),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn' }).querySelector('svg')).toBeInTheDocument();
  });
});
