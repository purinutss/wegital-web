import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import * as AuthApi from "../apis/AuthApi";
import { getAccessToken, setAccessToken, removeAccessToken } from "../utils/localStorage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(getAccessToken() ? true : null);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await AuthApi.getMe();
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);

  const login = async (username, password) => {
    const res = await AuthApi.login({ username, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  return (
    <AuthContext.Provider value={{ authenticatedUser, login, logout, setAuthenticatedUser }}>
      {children}
    </AuthContext.Provider>
  );
}
