import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';


const ViewForm = (props) => {
let { id } = useParams(); 
console.log('props', props);
console.log('topicId', id);
  return (
    <div>
      <NavBar />
      <h1>ViewForm Made form testing purposes, sup team </h1>
      <h1>{id}</h1>
    </div>
  );
}

export default ViewForm;
