import { FC } from 'react';

import Logotype from '@assets/images/Logo.png';

import styles from '@components/Logo/Logo.module.scss';

// interface Props {

// }

export const Logo: FC = () => (
  <div className={styles.logo}>
    <img
      src={Logotype}
      alt="Inventory Logotype"
      className={styles.logo__image}
    />
    <p className={styles.logo__text}>
      inventory
    </p>
  </div>
);
