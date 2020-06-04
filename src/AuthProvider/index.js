import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) setToken(storedToken);
  }, []);

  const setTokenOverride = newToken => {
    if (!newToken) localStorage.removeItem('token');
    else localStorage.setItem('token', newToken);

    setToken(newToken);
  };

  const value = { token, setToken: setTokenOverride };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const { token, setToken } = useContext(AuthContext);
  const resetToken = () => setToken(null);
  return { token, setToken, resetToken };
};

export default Provider;
