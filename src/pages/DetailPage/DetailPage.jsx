import { Container, Grid } from "semantic-ui-react";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import SneakerCard from "../../components/SneakerCard.jsx/SneakerCard";
import SneakerDisplay from "../../components/SneakerDisplay/SneakerDisplay";
import DetailDisplay from "../../components/DetailDisplay/DetailDisplay";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import * as sneakersAPI from "../../utils/sneakerApi";

function DetailPage({ loggedUser, handleLogout }) {
  const [sneakers, setSneakers] = useState([]);
  const [profileUser, setProfileUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { sneakerName } = useParams();
  console.log(sneakerName, "<------ sneaker param in Detail Page");

  async function getSneaker() {
    try {
      // making the API CALL
      const response = await sneakersAPI.getSneaker(sneakerName);
      console.log(response, "<--- response from getSneaker()");

      setLoading(false); // set loading to false
      setSneakers(response.data);
      setProfileUser(response.user);
      console.log(response, " <- data is getSneaker");
    } catch (err) {
      console.log(
        err.message,
        " error in getSneaker something went wrong with the getSneaker api request, check server terminal"
      );
      setLoading(false);
      setError("Sneaker does not exist"); // <- this is what we show
      // on the page
    }
  }

  useEffect(() => {
    getSneaker();
  }, [sneakerName]);


  if (error) {
    return (
      <>
        <NavBar handleLogout={handleLogout} loggedUser={loggedUser}/>
        <ErrorMessage error={error} />;
      </>
    );
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <NavBar loggedUser={loggedUser} handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column style={{ maxWidth: 600 }}>
          {/* prob change this whole thing to postdisplay */}
        </Grid.Column>

        <Grid.Column style={{ maxWidth: 600 }}>
          
        </Grid.Column>
        <Grid.Column style={{ maxWidth: 600 }}>
          
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column width={14} style={{ maxWidth: 600 }}>
          <DetailDisplay sneakers={sneakers}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default DetailPage;
