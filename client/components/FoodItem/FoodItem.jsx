import { maxWidth } from "@material-ui/system";
import { urlencoded } from "body-parser";
import React, { useContext, useEffect, useState, useRef } from "react";
import "./FoodItem.css";
import { MenuContext } from "../../providers/MenuContext";

const FoodItem = (foodName, foodDescription, foodImg, foodPrice) => {
  const { menu, menuHandler } = useContext(MenuContext);
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [userText, setUserText] = useState("");
  const [foodItem, setFoodItem] = useState([]);
  let foodList = [];

  useEffect(() => {
    console.log(foodName);
  });

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      console.log(file);
      const reader = new FileReader();
      console.log(reader);
      const { current } = uploadedImage;
      current.file = file;
      console.log("current.file: ", current.file, "file: ", file);
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="food-item">
      <div className="food-item-buttons">
        <div onClick={() => console.log("delete")}>
          <i className="fas fa-trash-alt"></i>
        </div>
        <div onClick={() => imageUploader.current.click()}>
          <i class="fas fa-upload"></i>
        </div>
        <input
          type="file"
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
              <h5 className="card-title">{foodName.foodName}</h5>
              <p className="card-text">{foodName.foodDescription}</p>
              <p className="card-text">
                <small className="text-muted">{foodName.foodPrice}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
