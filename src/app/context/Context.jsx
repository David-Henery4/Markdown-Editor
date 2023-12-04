import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  //
  return (
    <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export {
  AppContext,
  AppProvider,
}
