import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const openSideBar = () => {
      setIsSideBarOpen(true);
      console.log("clicked")
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };



  return <AppContext.Provider value={{  isSideBarOpen,  openSideBar, closeSideBar }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
