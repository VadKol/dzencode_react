import { FC, useEffect, useState } from 'react';
import moment from 'moment';

import { SessionCounter } from '@components/SessionCounter';

import styles from '@components/TopMenu/TopMenu.module.scss';

export const TopMenu: FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 1000);
  }, []);

  return (
    <div className={styles.topMenu}>
      <div className={styles.topMenu__datetime}>
        <p className={styles.topMenu__date}>
          {moment().format('DD MMM, YYYY')}
        </p>
        <p>
          {moment(currentTime.getTime()).format('LT')}
        </p>
      </div>

      <SessionCounter />
    </div>
  );
};