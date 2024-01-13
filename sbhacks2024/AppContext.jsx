import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [appData, setAppData] = useState({}); 
  
    return (
      <AppContext.Provider value={{ appData, setAppData }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export { AppProvider, AppContext };