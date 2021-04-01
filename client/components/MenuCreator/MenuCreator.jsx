import React, { useState, useContext, useEffect } from "react";
import "./MenuCreator.css";
import Header from "../Header/Header";
import { MenuContext } from "../../providers/MenuContext";

const MenuCreator = () => {
  // global state + context_API
  const { menuHandler, menuName, menuNameHandler, foodItems } = useContext(MenuContext);
  const { headers, setHeaders } = useContext(MenuContext);
  
  // local state
  const [userText, setUserText] = useState("");
  const [menuCreated, setMenuCreated] = useState(false);

  // local updating variable for storing headers in order
  let headerList = [];
  // let propHeader = ''

  const newHeader = () => {
    let newHeaderElement = {
      key: userText, 
      header: userText, 
      foodItems: [],
    };
    // let newHeaderElement = (
    //   <Header key={`${userText}`} header={userText} />
    // ); 
    setHeaders([...headers, newHeaderElement]);
    // propHeader = userText; 
    // return setUserText("");
  };

  useEffect(() => {
    setUserText("")
  }, [setHeaders])
  // const updateHeader = (header) => {
    
  //   foodItems.forEach((elem) => {
  //     if (!header.foodItems.hasOwnProperty(elem.key)) {
  //       header.foodItems[elem][key] = elem
  //       setHeaders([...headers, ])
  //     }
  //   })
    
  // }

  const newText = (e) => {
    e.preventDefault();
    return setUserText(e.target.value);
  };

  const newMenuName = (e) => {
    e.preventDefault();
    menuNameHandler(e.target.value);
  };

  if (!menuCreated || menuName.length == 0) {
    return (
      <div className="menu-name">
        <label htmlFor="form-control" className="form-label">
          Menu Name
        </label>
        <input
          type="text"
          id="input"
          className="form-control"
          placeholder="Wine and Drinks Menu"
          aria-label="Wine and Drinks Menu"
          aria-describedby="button-addon2"
          onChange={(e) => newMenuName(e)}
          autoComplete="off"
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setMenuCreated(!menuCreated)}
        >
          Create
        </button>
      </div>
    );
  }
    return (
      <div id="menu-creator">
        <label htmlFor="form-control" className="form-label">
          Add A New Section
        </label>
        <form className="input-group mb-3">
          <input
            type="text"
            id="input"
            className="form-control"
            placeholder="Breakfast, Sides, Wine etc..."
            aria-label="Breakfast, Sides, Wine etc..."
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
        <h1>{menuName}</h1>
        <br />
        <Header header={userText}/>
      </div>
    );
};

export default MenuCreator;
