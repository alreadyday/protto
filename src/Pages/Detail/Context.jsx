import React from "react";
// create default context
export const DetailContext = React.createContext();

// set provider
export const DetailContextProvider = ({ children }) => {
  const [detail, setDetail] = React.useState([]);

  return (
    <DetailContext.Provider
      value={{
        detail,
        setDetail,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};

// get list impl
export const DetailGet = function (contract, token_id) {
  return fetch(
    `https://api.opensea.io/api/v1/asset/${contract}/${token_id}`
  ).then((response) => response.json());
};
