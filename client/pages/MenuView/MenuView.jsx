import React, { useState, useContext, useEffect } from "react";
import "./MenuView.css";
// import Header from "../Header/Header";
import { MenuContext } from "../../providers/MenuContext";
import FoodView from "./FoodView";
const MenuView = () => {
  const {
    menuHandler,
    menuName,
    menuNameHandler,
    foodItems,
    email,
    currentMenu,
    currentMenuData,
    setCurrentMenuData,
  } = useContext(MenuContext);
  const { headers, setHeaders } = useContext(MenuContext);
  const devServer = "http://localhost:3000";
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

  const newText = (e) => {
    e.preventDefault();
    return setUserText(e.target.value);
  };

  const newMenuName = (e) => {
    e.preventDefault();
    menuNameHandler(e.target.value);
  };

  useEffect(() => {
    fetch(`${devServer}/menus/menuID/${currentMenu}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let cleanData = data.menu[0].menudata.data;
        console.log("data in getAllMenus", cleanData);
        return setCurrentMenuData(cleanData);
      })
      .catch((err) => console.log(`Error in getting all projects: ${err}`));
  }, []);

  console.log(currentMenuData);
  if (Object.keys(currentMenuData).length > 0) {
    return (
      <div>
        <br />
        <h1>{currentMenuData.menuName}</h1>
        {currentMenuData.menuSubObjects.map((header) => (
          <div>
            <h2>{header["header"]}</h2>
            <FoodView headerProp={header}/>
          </div>
        ))}
      </div>
    );
  } else return null;
};

export default MenuView;
