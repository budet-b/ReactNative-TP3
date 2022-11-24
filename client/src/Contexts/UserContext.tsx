import React, { ReactNode, useState } from 'react';

// @ts-ignore
const UsersContext = React.createContext();

const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState([]);

  // FIXME
};

export { UsersContext, UsersProvider };
