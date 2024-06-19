import { Typography } from '@mui/material';
import { CelebrationOutlined } from '@mui/icons-material';
import { FC } from 'react';
import routeRoutes from '../../../routes/routes';

interface LogoProps {
  isDesktop?: boolean;
}

export const Logo: FC<LogoProps> = ({ isDesktop }) => (
  <>
    <CelebrationOutlined
      data-testid="logo-icon"
      sx={{
        display: { xs: isDesktop ? 'none' : 'flex', md: isDesktop ? 'flex' : 'none' },
        mr: 1,
      }}
    />
    <Typography
      data-testid="logo-text"
      variant={isDesktop ? 'h6' : 'h5'}
      noWrap
      component="a"
      href={routeRoutes.home}
      sx={{
        mr: 2,
        display: { xs: isDesktop ? 'none' : 'flex', md: isDesktop ? 'flex' : 'none' },
        flexGrow: isDesktop ? undefined : 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      EVENTS
    </Typography>
  </>
);
