import { createContext, useContext, useState } from "react";

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const getToken = localStorage.getItem("JWT_TOKEN_LINKIFY")
    ? JSON.parse(localStorage.getItem("JWT_TOKEN_LINKIFY"))
    : null;
  const [token, setToken] = useState(getToken);
  const sendData = {
    token,
    setToken,
  };
  return <ContextApi.Provider value={sendData}>{children}</ContextApi.Provider>;
};

// custom hook
export const useStoreContext = () => useContext(ContextApi);
