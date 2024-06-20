import { FC, ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import { Footer, Header } from '../components/organisms';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    <Header />
    <Box component="main" flexGrow={1} py={2}>
      <Container maxWidth="xl">{children}</Container>
    </Box>
    <Footer />
  </Box>
);
