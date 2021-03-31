import { maxWidth } from "@material-ui/system";
import { urlencoded } from "body-parser";
import React, { useEffect, useState, useRef } from "react";
import "./FoodItem.css";

const FoodItem = (foodName, foodDescription, foodImg, foodPrice) => {
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
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
    return (
      <div className="food-item">
        <i className="fas fa-trash-alt"></i>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none",
            }}
          />
          <div
            style={{
              height: "60px",
              width: "60px",
              border: "1px dashed black",
            }}
            onClick={() => imageUploader.current.click()}
          >
          </div>
          Click to upload Image
        </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
            <img
              ref={uploadedImage}
              width='50px'
            />
            </div>
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
