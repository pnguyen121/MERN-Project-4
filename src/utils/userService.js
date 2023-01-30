import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    // no need for header when sending multipart form data browser auto detects and append headers.
    // Uploading a file required doing form data
    body: user //we set the stuff in the handleSubmit function in SignUpPage
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    return res.json().then(response => {

      console.log(response.error)

      throw new Error('Email already taken!');
    })
  })
  // Parameter destructuring!
  .then(({token}) => tokenService.setToken(token)); //store the token in local sstorage, then access that token later
  // The above could have been written as
  //.then((token) => token.token);
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

export default {
  signup, 
  getUser,
  logout,
  login
};