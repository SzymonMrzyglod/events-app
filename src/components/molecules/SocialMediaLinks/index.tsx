import { FC, ReactElement } from 'react';
import { IconButton, Box } from '@mui/material';
import { Facebook, Instagram, LinkedIn, X } from '@mui/icons-material';

interface SocialMediaItem {
  id: number;
  href: string;
  label: string;
  icon: ReactElement;
}

const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    label: 'Facebook',
    icon: <Facebook />,
  },
  {
    id: 2,
    href: 'https://www.x.com',
    label: 'x',
    icon: <X />,
  },
  {
    id: 3,
    href: 'https://www.instagram.com',
    label: 'Instagram',
    icon: <Instagram />,
  },
  {
    id: 4,
    href: 'https://www.linkedin.com',
    label: 'LinkedIn',
    icon: <LinkedIn />,
  },
];

export const SocialMediaLinks: FC = () => (
  <Box display="flex" justifyContent="center" alignItems="center">
    {socialMedia.map((platform) => (
      <IconButton
        key={platform.id}
        component="a"
        href={platform.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={platform.label}
      >
        {platform.icon}
      </IconButton>
    ))}
  </Box>
);
