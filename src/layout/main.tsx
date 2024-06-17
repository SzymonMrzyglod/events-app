import { FC, ReactNode } from 'react';
import { Header } from '../components/organisms';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);
