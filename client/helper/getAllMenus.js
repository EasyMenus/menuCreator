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
  return menus;
};
