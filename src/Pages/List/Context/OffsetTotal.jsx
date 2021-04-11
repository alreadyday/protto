import React from "react";

// create default context
export const OffsetTotalContext = React.createContext();

// set provider
export const OffsetTotalContextProvider = ({ children }) => {
  const [offsetTotal, setOffsetTotal] = React.useState(0);
  const [offsetRuntime, setOffsetRunTime] = React.useState(0);

  return (
    <OffsetTotalContext.Provider
      value={{
        offsetTotal,
        offsetRuntime,
        setOffsetTotal,
        setOffsetRunTime,
      }}
    >
      {children}
    </OffsetTotalContext.Provider>
  );
};

export const detectScroll = (offsetContext) => () => {
  const { offsetRuntime, offsetTotal, setOffsetRunTime } = offsetContext;
  const scroll = window.scrollY;
  const currentHeight = window.innerHeight + scroll;
  const isPageBottom = currentHeight > document.body.clientHeight;
  const isRunning = offsetRuntime === offsetTotal + 1;
  if (isPageBottom && !isRunning) {
    setOffsetRunTime(offsetTotal + 1);
  }
};

export const offsetInit = function (offsetContext) {
  React.useEffect(() => {
    const detectCallback = detectScroll(offsetContext);
    window.addEventListener("scroll", detectCallback);
    return () => window.removeEventListener("scroll", detectCallback);
  }, []);
};
