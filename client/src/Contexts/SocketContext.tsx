import React, { ReactNode } from 'react';
import io from 'socket.io-client';

// @ts-ignore
const SocketContext = React.createContext();

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const ENDPOINT = 'http://localhost:8000';
  const socket = io(ENDPOINT, { transports: ['websocket', 'polling'] });
  //   FIXME
};

export { SocketContext, SocketProvider };
