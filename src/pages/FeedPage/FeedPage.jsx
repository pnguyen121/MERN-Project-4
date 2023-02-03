import { Container, Grid } from "semantic-ui-react";

import { useEffect, useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import SneakerCard from "../../components/SneakerCard.jsx/SneakerCard";
import SneakerDisplay from "../../components/SneakerDisplay/SneakerDisplay";

import * as sneakersAPI from "../../utils/sneakerApi";
import * as likesAPI from "../../utils/likeApi"

function FeedPage({ loggedUser, handleLogout, toggle }) {
  const [sneakerCards, setSneakerCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


//   LIKES
async function addLike(sneakerId) {
    // postId exists in the card component
    console.log("AddLike just ran")
    try {
      const response = await likesAPI.create(sneakerId);
      console.log(response, " response from likes APi");
      // update the cards with likes array
      getSneakerPosts();// getPosts updates our state, so we'll see a change in the UI, heart will go to red
    } catch (err) {
      console.log(err.message, " add like");
    }
  }

  async function removeLike(likeId) {
    // postId exists in the card component
    try {
      const response = await likesAPI.deleteLike(likeId);
      console.log(response, " response from likes APi");
      // update the cards with likes array
      getSneakerPosts();// getPosts updates our state, so we'll see a change in the UI, heart will go to grey
    } catch (err) {
      console.log(err.message, " remove like");
    }
  }



  async function handleDeleteSneaker(sneakerId){
    try {
        const response = await sneakersAPI.deleteSneaker(sneakerId);
        console.log(response, ", delete sneaker");
        getSneakerPosts();
    } catch (err) {
        console.log(err);
        setError("Sneaker not deleting");
    }
  }



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
  }, [toggle]);

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
          <SneakerDisplay
            sneakerCards={sneakerCards}
            loggedUser={loggedUser}
            isProfile={false}
            loading={loading}
            numPhotosCol={3}
            handleDeleteSneaker={handleDeleteSneaker}
            addLike={addLike}
            removeLike={removeLike}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default FeedPage;
