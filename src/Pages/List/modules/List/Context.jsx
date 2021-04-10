import React from "react";

// create default context
export const ListContext = React.createContext();

// set provider
export const ListContextProvider = ({ children }) => {
  const [list, setList] = React.useState([1]);

  return (
    <ListContext.Provider
      value={{
        list,
        setList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
