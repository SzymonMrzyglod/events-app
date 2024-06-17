import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Routes } from './routes';

const App: FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
