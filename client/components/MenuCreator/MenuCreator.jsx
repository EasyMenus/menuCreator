import { urlencoded } from "body-parser";
import React, { useEffect, useState } from "react";
const axios = require("axios");

const MenuCreator = () => {
    const [title, setTitle] = useState('');
    const [headers, setHeaders] = useState([]);

  return (
  <div>
      <i className="fas fa-plus"></i>
  </div>
  );
};

export default MenuCreator;