import { MenuItem, Menu, IconButton, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { FC, useState, MouseEvent } from 'react';
import routeRoutes from '../../../routes/routes';
import { Link } from '../../atoms';
import { LinkProp } from '../../../types/page';

const pages: LinkProp[] = [
  { name: 'Home', href: routeRoutes.home },
  { name: 'Events', href: routeRoutes.events },
  { name: 'Calendar', href: routeRoutes.calendar },
];

interface NavProps {
  isDesktop?: boolean;
}

export const Navigation: FC<NavProps> = ({ isDesktop }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {isDesktop ? (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '16px' } }}>
          {pages.map((page) => (
            <Link key={page.name} href={page.href} name={page.name} />
          ))}
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu} href={page.href}>
                <Link key={page.name} href={page.href} name={page.name} />
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )}
    </>
  );
};
