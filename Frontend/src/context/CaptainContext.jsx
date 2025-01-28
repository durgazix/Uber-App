import { createContext, useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [error, setError] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };
 
  const value = {
    captain,
    setCaptain,
    error,
    setError,
    isloading,
    setIsLoading,
    updateCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
