import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import { getMenu } from "../../../helper/getAllMenus";

const EditForm = (props) => {
let { id } = useParams(); 
console.log('props', props);
console.log('id', id);

const editMenuFetch = () => {
  getMenu(id)
    .then((data) => {
      console.log('data in EditForm', data)
    })
    .catch((err) => `Error in getMenu: ${err}`)
}

useEffect(() => {
  editMenuFetch();
  return () => {};
}, []);

  return (
    <div>
      <h1>Edit Form Made form testing purposes, sawpp (reueben was here)</h1>
      <h1>{id}</h1>
    </div>
  );
}

export default EditForm;
