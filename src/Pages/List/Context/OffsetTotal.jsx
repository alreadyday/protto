import React from "react";

// create default context
export const OffsetTotalContext = React.createContext();

// set provider
export const OffsetTotalContextProvider = ({ children }) => {
  const [offsetTotal, setOffsetTotal] = React.useState(0);
  const [offsetRuntime, setOffsetRunTime] = React.useState(0);
  const detectScroll = () => {
    const scroll = window.scrollY;
    const currentHeight = window.innerHeight + scroll;
    const isPageBottom = currentHeight > document.body.clientHeight;
    const isRunning = offsetRuntime === offsetTotal + 1;
    if (isPageBottom && !isRunning) {
      setOffsetRunTime(offsetTotal + 1);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", detectScroll);
    return () => window.removeEventListener("scroll", detectScroll);
  });

  return (
    <OffsetTotalContext.Provider
      value={{
        offsetTotal,
        offsetRuntime,
        setOffsetTotal,
      }}
    >
      {children}
    </OffsetTotalContext.Provider>
  );
};
