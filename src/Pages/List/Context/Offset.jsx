import React from "react";
import { fromEvent, interval } from "rxjs";
import { debounce } from "rxjs/operators";

// create default context
export const OffsetContext = React.createContext();

// set provider
export const OffsetContextProvider = ({ children }) => {
  // offsetTotal - current list offset
  const [offsetTotal, setOffsetTotal] = React.useState(0);
  // offsetRuntime - ongoing offset, getting list data
  const [offsetRuntime, setOffsetRunTime] = React.useState(0);

  return (
    <OffsetContext.Provider
      value={{
        offsetTotal,
        offsetRuntime,
        setOffsetTotal,
        setOffsetRunTime,
      }}
    >
      {children}
    </OffsetContext.Provider>
  );
};

// create detect scroll event and called when get new list
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

// subscribe a scroll detect event for getting new list
export const offsetInit = function (offsetContext) {
  React.useEffect(() => {
    const detectCallback = detectFactory(offsetContext);
    const scrollEvent = fromEvent(document, "scroll");
    const result = scrollEvent.pipe(debounce(() => interval(1000)));
    const subscription = result.subscribe(detectCallback);
    return () => subscription.unsubscribe();
  }, [offsetContext.offsetTotal]);
};
