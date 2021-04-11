import React from "react";
import { fromEvent, interval } from "rxjs";
import { debounce, throttle } from "rxjs/operators";

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

export const detectFactory = (offsetContext) => () => {
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
    const detectCallback = detectFactory(offsetContext);
    const scrollEvent = fromEvent(document, "scroll");
    const result = scrollEvent.pipe(debounce(() => interval(1000)));
    const subscription = result.subscribe(detectCallback);
    return () => subscription.unsubscribe();
  }, [offsetContext.offsetTotal]);
};
