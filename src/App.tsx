import { FC } from 'react';

import { MainLayout } from '@/layouts/MainLayout';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </BrowserRouter>
  );
};
