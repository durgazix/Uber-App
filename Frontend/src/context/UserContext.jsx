import React, { createContext } from "react";
import { useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });

  return (
    <div>
      <UserDataContext.Provider value={[user, setUser]}>
        {children}
      </UserDataContext.Provider>
    </div>
    // <div>{children}</div>
  );
};

export default UserContext;
