import { FC, ReactNode } from 'react';
import { Container } from '@mui/material';
import { Header } from '../components/organisms';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>
      <Container maxWidth="xl">{children}</Container>
    </main>
  </>
);
