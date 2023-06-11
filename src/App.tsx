import { FC } from 'react';

import { MainLayout } from '@/layouts/MainLayout';
import { BrowserRouter } from 'react-router-dom';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};
