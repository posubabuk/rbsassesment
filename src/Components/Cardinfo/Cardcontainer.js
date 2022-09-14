/** @format */

// import React, { Component } from "react";
import React, { useEffect, useRef, useState } from "react";
import Carddetails from "./Carddetails";
import { apiInfo } from "../Services/Api/Constants";
import { FetchCharinfo } from "../Services/Api/FetchCharinfo";
import Searchchars from "./Searchchars";
function Cardcontainer(props) {
  const [CharactorsInfo, setCharactorsInfo] = useState([]);
  const [ApiError, setApiError] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await FetchCharinfo(apiInfo.baseURL);
      console.log("use Effect / fetchData result  ==>", response);
      if (response === undefined) {
        setApiError(response);
      } else {
        setCharactorsInfo(response);
      }
    }
    fetchData();
    return () => console.log("Clenaup / my effect is destroying...");
  }, [apiInfo.baseURL]);

  return (
    <div>
      <Searchchars CharactorData={CharactorsInfo} ApiError={ApiError} />
    </div>
  );
}

export default Cardcontainer;
