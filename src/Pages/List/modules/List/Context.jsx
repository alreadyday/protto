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
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

// get list impl
export const listGet = function (offsetTotal) {
  return fetch(
    `https://api.opensea.io/api/v1/assets?offset=${offsetTotal}&owner=0x960DE9907A2e2f5363646d48D7FB675Cd2892e91`
  )
    .then((response) => response.json())
    .then(({ assets }) => assets);
};
