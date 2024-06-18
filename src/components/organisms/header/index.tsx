import { Container, Toolbar, AppBar } from '@mui/material';
import { FC } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Logo } from '../../atoms';
import { Nav } from '../../molecules';

export const Header: FC = () => {
  const theme = useTheme();
  const desktopView = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {desktopView ? (
            <>
              <Logo isDesktop />
              <Nav isDesktop />
            </>
          ) : (
            <>
              <Nav />
              <Logo />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
