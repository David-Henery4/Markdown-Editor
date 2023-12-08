"use client";
import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMd, setActiveMd] = useState(0);
  const [activeMdData, setActiveMdData] = useState({
    id: +new Date(),
    userId: "",
    createdAt: new Date(),
    name: "untitled-document.md",
    content: "",
  });
  //
  const handleSetActiveMarkdownIndex = (n) => {
    setActiveMd(n);
  };
  //
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        handleSetActiveMarkdownIndex,
        activeMd,
        activeMdData,
        setActiveMdData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
