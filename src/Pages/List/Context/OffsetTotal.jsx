import React from "react";

// create default context
export const OffsetTotalContext = React.createContext();

// set provider
export const OffsetTotalContextProvider = ({ children }) => {
  const [offsetTotal, setOffsetTotal] = React.useState(0);

  return (
    <OffsetTotalContext.Provider
      value={{
        offsetTotal,
        setOffsetTotal,
      }}
    >
      {children}
    </OffsetTotalContext.Provider>
  );
};
