const devServer = "http://localhost:3000";

export const getAllMenus = () => {
  let email = window.localStorage.getItem("email");
  const body = JSON.stringify({ email });
  const menus = fetch(`${devServer}/menus/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log("data in getAllMenus", data);
      return data;
    })
    .catch((err) => console.log(`Error in getting all projects: ${err}`));
    console.log(menus)
  return menus;
};

export const getMenu = (_id) => {
  // let email = window.localStorage.getItem("email");
  const body = JSON.stringify({ _id });
  const menu = fetch(`${devServer}/menus/menuID`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  })
  .then((res) => res.json())
  .then((result) => {
    // console.log(result);
    return result.menu;
  })
  .catch((err) => console.log(`Error in getting menu: ${err}`))
  return menu;
      // helper will take menu id, send it to the backend, <-- send menuid and email from local storage 
    // the backend will retrieve that data, 
    // and will send back the data that will come from that to the front end, then parsing it, 
    // then shove it back in the form
};

// export const editMenu = (_id) => {
//   // let email = window.localStorage.getItem("email");
//   const body = JSON.stringify({ _id });
//   const menu = fetch(`${devServer}/menus/menuID`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body,
//   })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log('result in editMenu helper', result);
//     return result.menu;
    
//   })
//   .catch((err) => console.log(`Error in editing menu: ${err}`))
//   return menu;
// }
