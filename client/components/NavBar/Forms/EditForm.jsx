import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';


const EditForm = (props) => {
let { id } = useParams(); 
console.log('props', props);
console.log('topicId', id);
  return (
    <div>
      <h1>Edit Form Made form testing purposes, sawpp (reueben was here)</h1>
      <h1>{id}</h1>
    </div>
  );
}

export default EditForm;
