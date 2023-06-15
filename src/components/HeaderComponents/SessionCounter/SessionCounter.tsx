import { FC, useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5173');

export const SessionCounter: FC = () => {
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    socket.on('activeSessions', (count: number) => {
      setActiveSessions(count);
      localStorage.setItem('activeSessions', count.toString());
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const storedSessions = localStorage.getItem('activeSessions');
    if (storedSessions) {
      setActiveSessions(parseInt(storedSessions));
    }
  }, []);

  return <p>Sessions: {activeSessions}</p>;
};
