import React, { useState, useContext } from "react";
import "./MenuCreator.css";
import Header from "../Header/Header";
import { MenuContext } from "../../providers/MenuContext";

const MenuCreator = () => {
  // global state + context_API
  const { menu, menuHandler } = useContext(MenuContext);

  // local state
  const [userText, setUserText] = useState("");
  const [headers, setHeaders] = useState([]);

  // local updating variable for storing headers in order
  let headerList = [];

  const newHeader = () => {
    let newHeaderElement = (
      <Header key={`header_${userText}`} header={userText} />
    );
    headerList.push(newHeaderElement);
    setUserText("");
    //menuHandler()
    return setHeaders([...headers, newHeaderElement]);
  };

  const newText = (e) => {
    e.preventDefault();
    return setUserText(e.target.value);
  };

  return (
    <div id="menu-creator">
      <form className="input-group mb-3">
        <input
          type="text"
          id="input"
          className="form-control"
          placeholder="Header Name"
          aria-label="Header Name"
          aria-describedby="button-addon2"
          onChange={(e) => newText(e)}
          autoComplete="off"
          value={userText}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => newHeader()}
        >
          <i className="fas fa-plus"></i>
        </button>
      </form>
      <br />
      <h1>Menu</h1>
      <br />
      {[headers]}
    </div>
  );
};

export default MenuCreator;
