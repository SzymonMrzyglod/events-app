import { ThemeProvider } from '@mui/material/styles';
import { MemoryRouter } from 'react-router-dom';
import { FC, PropsWithChildren } from 'react';
import theme from '../theme/base';

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
  </ThemeProvider>
);
export default Wrapper;
