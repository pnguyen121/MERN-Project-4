import { Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import "./App.css";
import { useState } from "react";

import userService from "./utils/userService";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import AddSneakerForm from "./components/AddSneakerForm/AddSneakerForm";

import * as sneakersAPI from "./utils/sneakerApi"

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


  // ADD SNEAKER FORM STUFF
  const [sneakerCard, setSneakerCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // handle add sneaker from AddSneakerForm



  async function handleAddSneaker(sneaker) {
    console.log("handleAddSneaker got hit")
    try {
        // this is where we will make the api call to our server
        // because we'll get the response and then we can update state to reflect that change
        // like adding a new post
        setLoading(true);
        const response = await sneakersAPI.create(sneaker); // waiting for the json to be return from the server and parsed by us!
  
        // data is the response from the api, the result of the .then if(res.ok) return res.json() in the create postAPI utils function
        console.log(response, "<----- handleAddSneaker");
        setSneakerCard([response.sneaker, ...sneakerCard]); /// ...posts would keep all the posts in the previous states array
        setLoading(false);
      } catch (err) {
        // this is the error from the throw block, in the postsAPI.create function
        console.log(err.message, "error in addSneaker");
        setError("Error creating sneaker, please try again");
      }
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
        <Route
          path="/addsneaker"
          element={<AddSneakerForm handleAddSneaker={handleAddSneaker}/>}
        />
        <Route
      path="/:sneaker/:sneakerName"
      element={<DetailPage loggedUser={user} handleLogout={handleLogout}/>}
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
    <Route
      path="/:sneaker/:sneakerName"
      element={<DetailPage loggedUser={user} handleLogout={handleLogout}/>}
    />
  </Routes>
)
}

export default App;
