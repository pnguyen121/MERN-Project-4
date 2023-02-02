import { Container, Grid } from "semantic-ui-react";

import { useEffect, useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import SneakerCard from "../../components/SneakerCard.jsx/SneakerCard";
import SneakerDisplay from "../../components/SneakerDisplay/SneakerDisplay";

import * as sneakersAPI from "../../utils/sneakerApi";

function FeedPage({ loggedUser, handleLogout }) {
  const [sneakerCards, setSneakerCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // get all sneakerPosts function
  async function getSneakerPosts() {
    try {
      const response = await sneakersAPI.getAll();
      setSneakerCards(response.data);
      setLoading(false);
      console.log(response, "<--- response data getSSneakerPosts");
    } catch (err) {
      console.log(err.message, "<---- Error in getsneakerPosts");
      setLoading(false);
    }
  }

  // On page load run this stuff
  useEffect(() => {
    getSneakerPosts();
  }, []);

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
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 700 }}>
          <SneakerDisplay
            sneakerCards={sneakerCards}
            loggedUser={loggedUser}
            isProfile={false}
            loading={loading}
            numPhotosCol={3}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default FeedPage;
