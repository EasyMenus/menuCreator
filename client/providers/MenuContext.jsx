import React, { useState } from "react";

export const MenuContext = React.createContext({});
//create handler that can edit state w/ user input

const MenuProviders = ({ children }) => {
  const [menu, setMenu] = useState({});
  const [email, setEmail] = useState('');
  const [menuName, setMenuName] = useState('')


  // final menu obj
  const menuHandler = () => {
    setMenu({
        menuName: menuName,
        email: email,
        
    });
  };

  const emailHandler = (str) => {
    setEmail(str);
  };

  const menuNameHandler = (str) => {
    setMenuName(str);
  };

  return (
    <MenuContext.Provider
      value={{
        menu, menuHandler,
        email, emailHandler,
        menuName, menuNameHandler,

      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProviders;
