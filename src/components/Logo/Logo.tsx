import { FC } from 'react';

import Logotype from '@assets/images/Logo.png';

export const Logo: FC = () => {
  return (
    <div className="logo">
      <img src={Logotype} alt="Inventory Logotype" />
      <p>inventory</p>
    </div>
  );
};
