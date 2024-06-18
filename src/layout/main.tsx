import { FC, ReactNode } from 'react';
import { Container } from '@mui/material';
import { SiteHeader } from '../components/organisms';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    <SiteHeader />
    <main>
      <Container maxWidth="xl">{children}</Container>
    </main>
  </>
);
