import React, { useState, useContext, useEffect } from "react";
import "./MenuCreator.css";
import Header from "../Header/Header";
import { MenuContext } from "../../providers/MenuContext";
import { history } from "../../App.jsx";
import NavBar from "./../NavBar/NavBar";

const MenuCreator = () => {
  // global state + context_API
  const { menuHandler, menuName, menuNameHandler, foodItems, email } = useContext(
    MenuContext
  );
  const { headers, setHeaders } = useContext(MenuContext);
  const devServer = 'http://localhost:3000'
  // local state
  const [userText, setUserText] = useState("");
  const [menuCreated, setMenuCreated] = useState(false);

  const newHeader = () => {
    let newHeaderElement = {
      key: userText,
      header: userText,
      foodItems: [],
    };
    setHeaders([...headers, newHeaderElement]);
  };

  useEffect(() => {
    setUserText("");
  }, [setHeaders]);

  const newText = (e) => {
    e.preventDefault();
    return setUserText(e.target.value);
  };

  const newMenuName = (e) => {
    e.preventDefault();
    menuNameHandler(e.target.value);
  };

  const saveMenu = () => {
    let body = {}
    body.data = { 
      menuName:  menuName,
      menuSubObjects: headers
     };
     body.email = window.localStorage.getItem('email')
    // body.email = email
    body = JSON.stringify(body)
     console.log(body)
   fetch(`${devServer}/menus/saveMenu`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data in getAllMenus", data);
        return data;
      })
      .catch((err) => console.log(`Error in getting all projects: ${err}`));
      
  };

  if (!menuCreated || menuName.length == 0) {
    return (
       <div>
         <NavBar/>
        <div className='menu-name'>
          <label htmlFor='form-control' className='form-label'>
            Menu Name
          </label>
          <input
            type='text'
            id='input'
            className='form-control'
            placeholder='Wine and Drinks Menu'
            aria-label='Wine and Drinks Menu'
            aria-describedby='button-addon2'
            onChange={(e) => newMenuName(e)}
            autoComplete='off'
          />
          <button
            type='button'
            className='btn btn-primary'
            style={{marginTop: '10px'}}
            onClick={() => setMenuCreated(!menuCreated)}
          >
            Create
          </button>
        </div>
     </div>
    );
  }
  return (
    <div>
      <NavBar/>
    <div id="menu-creator">
      <div id='submit-button'>
      <button onClick={() => saveMenu()}type="button" class="btn btn-success">Create</button>
      </div>
      <br/>
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
          value={userText}/>
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
      <Header header={userText} />
    </div>
    </div>
  );
};

export default MenuCreator;
