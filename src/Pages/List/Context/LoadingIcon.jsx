import React from "react";

// create default context
export const LoadingIconContext = React.createContext();

// set provider
export const LoadingIconProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <LoadingIconContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingIconContext.Provider>
  );
};
