import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";
require('dotenv').config();

const url = "http://localhost:8000";
const SocketContext = createContext(null);

console.log(url);
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  const socket = useMemo(() => io(url), []);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
