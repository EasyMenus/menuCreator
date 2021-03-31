const fetch = require("node-fetch");
const devServer = "http://localhost:3000";

export const newSession = (email, pwd) => {
  const body = JSON.stringify({
    email,
    pwd,
  });

  const result = fetch(`${devServer}/auth/login`, {
    method: "POST",
    // credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log("data in newSession", data);
      window.localStorage.setItem("email", data.user.email);
      return "Success";
    })
    .catch((err) => console.log("Error in authentication.js newSession", err));
  return result;
};

export const newUser = (firstname, lastname, email, pwd) => {
  const body = JSON.stringify({ firstname, lastname, email, pwd });
  const result = fetch(`${devServer}/auth/register`, {
    method: "POST",
    // credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log("data in newUser", data);
      window.localStorage.setItem("email", data.user.email);
      return "Success";
    })
    .catch((err) => console.log("Error in authentication.js newUser", err));
  return result;
};
