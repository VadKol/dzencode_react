import { FC } from 'react';

import { Header } from './components/Header';
import { Sidebar } from '@components/Sidebar';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
};
