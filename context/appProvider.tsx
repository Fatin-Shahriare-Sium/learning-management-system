"use client";
import React, { useContext, useEffect, useState, createContext } from "react";
import Cookies from "js-cookie";
import useRetriveToken from "@/hooks/useRetriveToken";

const AppContext = createContext({ isLogin: false, token: "" });
export const useAppProvider = () => useContext(AppContext);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { token } = useRetriveToken();
  console.log("useRetriveToken())", token);

  return <AppContext.Provider value={{ isLogin: token ? true : false, token: token }}>{children}</AppContext.Provider>;
};

export default AppProvider;
