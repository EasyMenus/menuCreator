const fetch = require('node-fetch');
const devServer = 'http://localhost:3000';

export const newSession = (email, pwd) => {
  const body = JSON.stringify({
    email,
    pwd
  })

  const result = fetch(`${devServer}/auth/login`, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
    .then(res => res.json())
    .then((data) => {
      console.log('data in newSession', data)
  })
    .catch(err => console.log('Error in authentication.js newSession', err));
  return result;
}

export const newUser = (firstName, lastName, email, pwd) => {
  const body = JSON.stringify({ firstName, lastName, email, pwd })
  const result = fetch(`${devServer}/auth/register`, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
    .then(res => res.json())
    .then(data => {
      console.log('data in newUser', data)
  })
    .catch(err => console.log('Error in authentication.js newUser', err));
  return result;
}
