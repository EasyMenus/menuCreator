import { urlencoded } from "body-parser";
import React, { useEffect, useState, useContext } from "react";
import "./Header.css";
import FoodItem from "../FoodItem/FoodItem";
import { MenuContext } from "../../providers/MenuContext";

const Header = (header) => {
  const { menu, menuHandler } = useContext(MenuContext);
  const { foodItems, setFoodItems } = useContext(MenuContext);
  const { headers, setHeaders } = useContext(MenuContext);

  const [foodName, setFoodName] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodImg, setFoodImg] = useState("");
  const [foodPrice, setFoodPrice] = useState("");

  let foodList = [];

  useEffect(() => {
    console.log(headers);
  });

  const newFoodItem = () => {
    let newFoodElement = { 
      key: `${foodName}`,
      foodName: foodName,
      foodDescription: foodDescription,
      foodImg: foodImg,
      foodPrice: foodPrice,
      sectionID: `${header.header}`,
    };
    setFoodName("");
    setFoodDescription("");
    setFoodPrice("");
    console.log(header)
    // console.log(newFoodElement['sectionID'])
    headers.map((elem, i) => {
      // console.log("elem.key", elem.key, "header", header)
      if (elem.key === header.header) {
        let update = headers;
        update[i].foodItems.push(newFoodElement)
        // console.log(" hi ", update)
        setHeaders(update)
      }
    })
    
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

  let items = <FoodItem /> || []

  return headers.map((elem, i) => (
    <div>
      <h3>{elem.header}</h3> 
      <FoodItem header={elem.header}/>
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
  ));
};

export default Header;
