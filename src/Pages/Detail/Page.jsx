import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { DetailContext, DetailGet } from "./Context";

export default function DetailPage() {
  const { detail, setDetail } = React.useContext(DetailContext);
  const location = useLocation();
  React.useEffect(async () => {
    const { contract, token_id } = queryString.parse(location.search);
    const res = await DetailGet(contract, token_id);
    setDetail(res);
  }, []);
  return (
    detail && (
      <div>
        <img src={detail.image_url} />
      </div>
    )
  );
}
