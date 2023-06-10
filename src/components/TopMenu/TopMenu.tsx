import { FC, useEffect, useState } from 'react';
import moment from 'moment';

export const TopMenu: FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 1000);
  }, []);

  return (
    <div>
      <div>
        <p>
          {moment().format('DD MMM, YYYY')}
        </p>
        <p>
          {moment(currentTime.getTime()).format('LT')}
        </p>
      </div>
    </div>
  );
};