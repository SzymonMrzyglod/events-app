import { Container, Toolbar, AppBar, Box, Typography } from '@mui/material';
import { FC } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { getYear } from 'date-fns';
import { SocialMediaLinks } from '../../molecules';

export const Footer: FC = () => {
  const theme = useTheme();
  const desktopView = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar position="static" data-testid="footer" component="footer" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            display="flex"
            justifyContent={desktopView ? 'space-between' : 'center'}
            alignItems="center"
            width="100%"
            py={2}
          >
            <Typography variant="body1" color="inherit">
              &copy; {getYear(new Date())} Events
            </Typography>
            <SocialMediaLinks />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
