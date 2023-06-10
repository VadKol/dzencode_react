import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/layouts/MainLayout';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};
