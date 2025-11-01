import React from "react";
import { io } from "socket.io-client";

const SocketContext = React.createContext(null);

export const useScoket = () => {
  return React.useContext(SocketContext);
};

export const ScoketProvider = (props) => {
  const scoket = useMemo(
    () =>
      io({
        host: "localhost",
        port: 8001,
      }),
    []
  );
  return (
    <SocketContext.Provider value={{ scoket }}>
      {props.children}
    </SocketContext.Provider>
  );
};
