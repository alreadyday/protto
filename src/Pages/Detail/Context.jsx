import React from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
// create default context
export const DetailContext = React.createContext();

// set provider
export const DetailContextProvider = ({ children }) => {
  const [detail, setDetail] = React.useState(null);

  return (
    <DetailContext.Provider
      value={{
        detail,
        setDetail,
        init: detailInit,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};

// get list impl
export const detailInit = function ({ setDetail }, location) {
  React.useEffect(() => {
    const { contract, token_id } = queryString.parse(location.search);
    fetch(`https://api.opensea.io/api/v1/asset/${contract}/${token_id}`)
      .then((response) => response.json())
      .then((detail) => setDetail(detail));
  }, []);
};
