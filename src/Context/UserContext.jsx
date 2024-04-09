/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [user, setIsUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setIsUser }}>
      {children}
    </UserContext.Provider>
  );
}
