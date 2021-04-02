import { maxWidth } from "@material-ui/system";
import { urlencoded } from "body-parser";
import React, { useContext, useEffect, useState, useRef } from "react";
import "./FoodItem.css";
import { MenuContext } from "../../providers/MenuContext";
import Header from "../Header/Header";

const FoodItem = (header) => {
  const { menu, menuHandler } = useContext(MenuContext);
  const { headers, foodItems, setFoodItems } = useContext(MenuContext);
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {

      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
      let currentItem = foodItems[e.target.id];
      currentItem["foodImg"] = uploadedImage;
      setFoodItems([(foodItems[e.target.id] = currentItem)]);
    }
  };

  const handleFoodItemDelete = (e) => {
    let i = Number(e.target.id);
    console.log(e);
    if (foodItems.length === 1) {
      setFoodItems([]);
    } else {
      console.log(i);
      return setFoodItems(foodItems.splice(i, 1));
    }
  };
  let current;
  console.log(headers[0].header, "header", header.header);
  for (let i = 0; i < headers.length; i++) {
    if (headers[i].header === header.header) {
      current = headers[i];
    }
  }
  console.log(current);
  if (headers[0].foodItems.length > 0) {
    return (
      <div>
        {current.foodItems.map((elem, i) => (
          <div key={i} className="food-item">
            <div className="food-item-buttons">
              <div onClick={(e) => handleFoodItemDelete(e)}>
                <i id={i} className="fas fa-trash-alt"></i>
              </div>
              <div onClick={() => imageUploader.current.click()}>
                <i className="fas fa-upload"></i>
              </div>
              <input
                type="file"
                id={i}
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                  display: "none",
                }}
              />
            </div>
            <div className="card mb-3">
              <div className="row g-0">
                <div
                  className="image-container"
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                >
                  <img ref={uploadedImage} height="75px" />
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{elem.foodName}</h5>
                    <p className="card-text">{elem.foodDescription}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        {"$" + elem.foodPrice + ".00"}
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
  } else return null;
};

export default FoodItem;
