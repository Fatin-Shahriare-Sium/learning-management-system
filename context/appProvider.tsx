"use client";
import React, { useContext, useEffect, useState, createContext } from "react";
import Cookies from "js-cookie";
import useRetriveToken from "@/hooks/useRetriveToken";

const AppContext = createContext({ isLogin: false });
export const useAppProvider = () => useContext(AppContext);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoginx, setIsLoginx] = useState(false);
  const { token } = useRetriveToken();
  console.log("useRetriveToken())", token);
  useEffect(() => {
    setIsLoginx(true);
  }, []);
  return <AppContext.Provider value={{ isLogin: token ? true : false }}>{children}</AppContext.Provider>;
};

export default AppProvider;
