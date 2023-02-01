import { Container, Grid } from "semantic-ui-react";

import { useEffect, useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import SneakerCard from "../../components/SneakerCard.jsx/SneakerCard";

import * as sneakersAPI from "../../utils/sneakerApi";

function FeedPage({ loggedUser, handleLogout }) {


  // get all sneakerPosts function
  async function getSneakerPosts() {
    try {
      const response = await sneakersAPI.getAll();
    } catch (err) {
      console.log(err.message, "<---- Error in getsneakerPosts");
      setLoading(false);
    }
  }


// On page load run this stuff
  useEffect(() => {

    getSneakerPosts();

  }, [])

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
          <SneakerCard />
        </Grid.Column>
        <Grid.Column style={{ maxWidth: 600 }}>
          <SneakerCard />
        </Grid.Column>
        <Grid.Column style={{ maxWidth: 600 }}>
          <SneakerCard />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16} style={{ maxWidth: 450 }}>
          <h2>Post Display Prob</h2>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default FeedPage;
