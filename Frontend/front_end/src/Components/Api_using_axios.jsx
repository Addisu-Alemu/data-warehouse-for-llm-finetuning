import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const Api_using_axios = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data)

  if (!data) return null;

  return <div>api_using_axios</div>;
};

export default Api_using_axios;
