import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import { getMenu } from "../../../helper/getAllMenus";


const ViewForm = (props) => {
  let { id } = useParams();
  const [keys, setKey] = useState({});
  const [values, setValues] = useState([])
  console.log(useParams());
  console.log("id", id);
  // console.log('history', props.location);
  // console.log(props.history.location.state)
  // console.log('topicId', id);
  let divy = document.getElementById("menuEntry");
  const viewMenuFetch = () => {
    getMenu(id)
      .then((data) => { 
        setValues(data)
      //   console.log("data back in ViewForm", data);
      //   setState(data);
      //   for (let i = 0; i < data.length; i++) {
      //     console.log("data[i]", data[i]);
      //     let menuItems = data[i];
      //     console.log(menuItems);
      //     for (let entry in menuItems) {
      //       console.log("dot notation baby", menuItems.itemname);
      //       divy[0].innerHTML += `<h2>${menuItems[entry]}</h2>`
      //       setKeys(entry);
      //       setValues(menuItems[entry])
        
      //     }
      //   }
      console.log('keys', keys)
      })
      .catch((err) => `Error in viewMenuFetch: ${err}`);
  };

  useEffect(() => {
    viewMenuFetch();
    return () => {};
  }, []);

  // `
  // <h1 id = 'menuName'>${menuItems.menuname}</h1>
  //   <h3 id='sectionName'>${menuItems.sectionname}</h3>
  //     <h4 id='itemName'>${menuItems.itemname}: ${menuItems.price}</h4>
  //   <h5 id='desc'>${menuItems.description}</h5>
  // `

  console.log("props", props);
  return (
    <div id='menuEntry'>
      {/* <h1 id='menuName'>Menu Name </h1>
      <h3 id='sectionName'>Section Name</h3>
      <h4 id='itemName'>Item Name: Price</h4>
      <h5 id='price'>Description</h5> */}
      <p>{JSON.stringify(values)}</p>
      {/* <p>{values}</p> */}
      <h1>{id}</h1>
    </div>
  );
};

export default ViewForm;
