import React from "react";
// create default context
export const ListContext = React.createContext();

// set provider
export const ListContextProvider = ({ children }) => {
  const [list, setList] = React.useState([]);

  return (
    <ListContext.Provider
      value={{
        list,
        setList,
        init: listInit,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

// get list impl
export const listGet = function (offsetTotal, dAppAccount) {
  return fetch(
    `https://api.opensea.io/api/v1/assets?offset=${offsetTotal}&owner=${dAppAccount}`
  )
    .then((response) => response.json())
    .then(({ assets }) => assets);
};

// trigger when request new list
export const listInit = function (listContext, offsetContext, dAppContext) {
  const { dAppAccount } = dAppContext;
  const { offsetRuntime, setOffsetTotal } = offsetContext;
  const { list, setList } = listContext;
  React.useEffect(async () => {
    if (!dAppAccount) {
      return;
    }
    const newList = await listGet(offsetRuntime, dAppAccount);
    setList([...list, ...newList]);
    setOffsetTotal(offsetRuntime);
  }, [offsetRuntime, dAppAccount]);
};
