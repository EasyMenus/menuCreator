import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import { getMenu } from "../../../helper/getAllMenus";

const EditForm = (props) => {
  let { id } = useParams();
  const [state, setState] = useState([]);

  const editMenuFetch = () => {
    getMenu(id)
      .then((data) => {
        // console.log('data in EditForm', data);
        setState(data);
      })
      .catch((err) => `Error in getMenu: ${err}`);
  };

  useEffect(() => {
    editMenuFetch();
    return () => {};
  }, []);

  return (
    <div>
      <NavBar/>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

export default EditForm;
