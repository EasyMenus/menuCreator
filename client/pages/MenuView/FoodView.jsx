import React, { useState, useContext, useEffect } from "react";
// import Header from "../Header/Header";
import { MenuContext } from "../../providers/MenuContext";

const FoodView = (headerProp) => {
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
  console.log("header", headerProp);
  return (
    <div>
      {headerProp.headerProp['foodItems'].map((foodItems) => (
        <div className="food-item">
          <div className="card mb-3">
            <div className="row g-0">
              <div
                className="image-container"
                style={{
                  height: "80px",
                  width: "80px",
                }}
              ></div>
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{foodItems.foodName}</h5>
                  <p className="card-text">{foodItems.foodDescription}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {"$" + foodItems.foodPrice + ".00"}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodView;
