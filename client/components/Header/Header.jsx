import { urlencoded } from "body-parser";
import React, { useEffect, useState } from "react";
import ImageUploader from "react-images-upload";
import "./Header.css"
import FoodItem from "../FoodItem/FoodItem"

const Header = (header) => {
  const [foodName, setFoodName] = useState("")
  const [foodDescription, setFoodDescription] = useState("")
  const [foodImg, setfoodImg] = useState("")
  const [foodPrice, setFoodPrice] = useState("")
  const [foodItem, setFoodItem] = useState([]);
  let foodList = [];
  
  const newFoodItem = () => {
    let newFoodElement = <FoodItem key={`header_${foodName}`} food={foodName}/>
    return setFoodItem([...foodItem, newFoodElement])
  };

  const newFoodName = (e) => {
    e.preventDefault();
    return setFoodName(e.target.value);
  };

  const newFoodDescription = (e) => {
    e.preventDefault();
    return setFoodName(e.target.value);
  };

  const newFoodImg = (e) => {
    e.preventDefault();
    return setFoodName(e.target.value);
  };

  const newFoodPrice = (e) => {
    e.preventDefault();
    return setFoodName(e.target.value);
  };

  return(
    <div>
      <h3>{header.header}</h3>
      <form className="input-group mb-3">
        <input
          type="text"
          id='input'
          className="form-control"
          placeholder="New Food Item"
          aria-label="New Food Item"
          aria-describedby="button-addon2"
          onChange={(e) => newFoodName(e)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => newFoodItem()}>
          <i className="fas fa-plus"> </i>
          </button>
      </form>
    {[foodItem]}
    </div>
  );
}

export default Header;