import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';


const EditForm = (props) => {
let { id } = useParams(); 
console.log('props', props);
console.log('topicId', id);
  return (
    <div>
      <NavBar />
      <h1>Edit Form Made form testing purposes, sawpp </h1>
      <p>{id}</p>
    </div>
  );
}

export default EditForm;
