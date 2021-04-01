import React, { useState, useContext } from "react";
import "./MenuCreator.css";
import Header from "../Header/Header";
import { MenuContext } from "../../providers/MenuContext";
import { history } from "../../App.jsx";
import NavBar from "./../NavBar/NavBar";

const MenuCreator = () => {
  // history.push('/');
  // history.goBack();
  // console.log('history', history)

  // global state + context_API
  const { menuHandler, menuName, menuNameHandler } = useContext(MenuContext);
  const { headers, setHeaders } = useContext(MenuContext);

  // local state
  const [userText, setUserText] = useState("");
  const [menuCreated, setMenuCreated] = useState(false);

  // local updating variable for storing headers in order
  let headerList = [];

  const newHeader = () => {
    let newHeaderElement = (
      <Header key={`header_${userText}`} header={userText} />
    );
    setUserText("");
    //menuHandler()
    return setHeaders([...headers, newHeaderElement]);
  };

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
       <div>
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
            onClick={() => setMenuCreated(!menuCreated)}
          >
            Create
          </button>
        </div>
     </div>
    );
  }
  if (menuName.length > 1 && menuCreated)
    return (
      <div id='menu-creator'>
        <label htmlFor='form-control' className='form-label'>
          Add A New Section
        </label>
        <form className='input-group mb-3'>
          <input
            type='text'
            id='input'
            className='form-control'
            placeholder='Breakfast, Sides, Wine etc...'
            aria-label='Breakfast, Sides, Wine etc...'
            aria-describedby='button-addon2'
            onChange={(e) => newText(e)}
            autoComplete='off'
            value={userText}
          />
          <button
            className='btn btn-outline-secondary'
            type='button'
            id='button-addon2'
            onClick={() => newHeader()}
          >
            <i className='fas fa-plus'></i>
          </button>
        </form>
        <br />
        <h1>{menuName}</h1>
        <br />
        {[headers]}
      </div>
    );
};

export default MenuCreator;
