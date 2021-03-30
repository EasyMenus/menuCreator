import { urlencoded } from "body-parser";
import React, { useEffect, useState } from "react";
const axios = require("axios");

const QR = () => {

    const [code, setCode] = useState('');

    let link = encodeURI("http://www.google.com/")
    console.log(encodeURI("http://www.google.com/"))
    let reqURI = `https://api.qrserver.com/v1/create-qr-code/?data=${link}&size=100x100`

  useEffect(() => {
    axios
      .get(reqURI)
      .then(function (response) {
        // handle success
        setCode(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  });

  return <div>
      <img src={reqURI} alt=""/>
  </div>;
};

export default QR;
