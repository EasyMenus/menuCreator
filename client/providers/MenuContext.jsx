import React, { useState } from "react";

export const MenuContext = React.createContext({});
//create handler that can edit state w/ user input

const MenuProviders = ({ children }) => {
  const [menu, setMenu] = useState({});
  const [email, setEmail] = useState(window.localStorage.getItem("email") || '');
  const [menuName, setMenuName] = useState('')
  const [headers, setHeaders] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [menuCache, setMenuCache] = useState([]);
  const [currentMenu, setCurrentMenu] = useState(0);
  const [currentMenuData, setCurrentMenuData] = useState({})

  // final menu obj
  const menuHandler = () => {
    setMenu({
        menuName: menuName,
        email: email,
        headers: headers, 
        foodItems: foodItems,
    });
  };

  const menuNameHandler = (str) => {
    setMenuName(str);
  };

  return (
    <MenuContext.Provider
      value={{
        menu, menuHandler,
        email, setEmail,
        menuName, menuNameHandler,
        headers, setHeaders, 
        foodItems, setFoodItems,
        menuCache, setMenuCache,
        currentMenu, setCurrentMenu,
        currentMenuData, setCurrentMenuData,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProviders;
