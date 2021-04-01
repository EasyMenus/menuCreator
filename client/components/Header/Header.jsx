import { urlencoded } from "body-parser";
import React, { useEffect, useState, useContext } from "react";
import "./Header.css";
import FoodItem from "../FoodItem/FoodItem";
import { MenuContext } from "../../providers/MenuContext";

const Header = (header) => {
  const { menu, menuHandler } = useContext(MenuContext);
  const { foodItems, setFoodItems } = useContext(MenuContext);

  const [foodName, setFoodName] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodImg, setFoodImg] = useState("");
  const [foodPrice, setFoodPrice] = useState("");

  let foodList = [];

  const newFoodItem = () => {
    let newFoodElement = {
      key: `food_${foodName}`,
      foodName: foodName,
      foodDescription: foodDescription,
      foodImg: foodImg,
      foodPrice: foodPrice,
      sectionID: `header_${header.header}`,
    };
    setFoodName("");
    setFoodDescription("");
    setFoodPrice("");
    setFoodItems([...foodItems, newFoodElement]);
  };

  const newFoodName = (e) => {
    e.preventDefault();
    return setFoodName(e.target.value);
  };

  const newFoodDescription = (e) => {
    e.preventDefault();
    return setFoodDescription(e.target.value);
  };

  const newFoodImg = (e) => {
    e.preventDefault();
    return setFoodImg(e.target.value);
  };

  const newFoodPrice = (e) => {
    e.preventDefault();
    return setFoodPrice(e.target.value);
  };
  
  return (
    <div>
      <h3>{header.header}</h3>
      <FoodItem /> 
      <br/>
      <div><i className="fas fa-edit"></i>{`  edit/delete`}</div>
      <br/>
      <div className="mb-3">
        <input
          type="text"
          id="input"
          className="form-control"
          placeholder="Entreé / Item Name"
          aria-label="Entreé / Item Name"
          aria-describedby="button-addon2"
          onChange={(e) => newFoodName(e)}
          autoComplete="off"
          value={foodName}
        />
      </div>
      <div className="mb-3">
        <textarea
          type="text"
          id="input"
          className="form-control"
          placeholder="Description"
          aria-label="Description"
          aria-describedby="button-addon2"
          onChange={(e) => newFoodDescription(e)}
          autoComplete="off"
          value={foodDescription}
        ></textarea>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input
          type="text"
          id="input"
          className="form-control"
          placeholder="Price"
          aria-label="Price"
          aria-describedby="button-addon2"
          onChange={(e) => newFoodPrice(e)}
          autoComplete="off"
          value={foodPrice}
        />
        <span className="input-group-text">.00</span>
      </div>
      <br />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={() => newFoodItem()}
      >
        {" "}
        <i className="fas fa-plus"> </i>
        {"  " + "Add Food Item"}
      </button>
      <br />
      <div>
        <br />

      </div>
    </div>
  );
};

export default Header;
