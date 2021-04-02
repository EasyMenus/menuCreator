import { urlencoded } from "body-parser";
import React, { useEffect, useState } from "react";
const axios = require("axios");
import "./QR.css"
import { MenuContext } from "../../providers/MenuContext";

const QR = () => {

    const [code, setCode] = useState('');
    const { currentMenu } = useContext(MenuContext);
    let link = encodeURI(`http://localhost:3000/menus/menuID/${currentMenu}`)
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

  return <div id='qr'>
      <img src={reqURI} alt=""/>
  </div>;
};

export default QR;
