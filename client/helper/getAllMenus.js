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
    .then(data => {
      return data;
    })
    .catch((err) => console.log(`Error in getting all projects: ${err}`));
    console.log(menus)
  return menus;
};

export const getMenu = (_id) => {
  const body = JSON.stringify({ _id });
  const menu = fetch(`${devServer}/menus/menuID`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  })
  .then((res) => res.json())
  .then(result => {
    return result.menu;
  })
  .catch((err) => console.log(`Error in getting menu: ${err}`))
  return menu;
};
