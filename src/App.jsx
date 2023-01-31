import { Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import "./App.css";
import { useState } from "react";

import userService from "./utils/userService";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import FeedPage from "./pages/FeedPage/FeedPage";

function App() {
  const [user, setUser] = useState(userService.getUser()); //setting state to see if there is a token present already. if there is grab it and set it in state

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); //getUser is a function gets the jwt token from local storage and decodes it
  }

  function handleLogout() {
    console.log("Logout function hitting");
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>
        <Route
          path="/"
          element={<FeedPage loggedUser={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
      </Routes>
    );
  }

return (
  <Routes>
    <Route
      path="/"
      element={<FeedPage loggedUser={user} handleLogout={handleLogout} />}
    />
    <Route
      path="/login"
      element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
    />
    <Route
      path="/signup"
      element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />}
    />
  </Routes>
)
}

export default App;
