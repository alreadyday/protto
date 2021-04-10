import React from "react";

// create default context
export const OffsetTotalContext = React.createContext();

export const detectScroll = () => {
  const scroll = window.scrollY;
  const currentHeight = window.innerHeight + scroll;
  if (currentHeight === document.body.clientHeight) {
    console.warn("get new");
  }
};

// set provider
export const OffsetTotalContextProvider = ({ children }) => {
  const [offsetTotal, setOffsetTotal] = React.useState(0);
  React.useEffect(() => {
    window.addEventListener("scroll", detectScroll);
    return () => window.removeEventListener("scroll", detectScroll);
  });

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
