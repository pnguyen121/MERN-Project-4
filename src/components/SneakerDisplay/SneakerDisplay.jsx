import React from "react";
import { Card, Dimmer, Segment, Image, Grid } from "semantic-ui-react";

import SneakerCard from "../SneakerCard.jsx/SneakerCard";

import Loader from "../Loader/Loader";

function SneakerDisplay({
  sneakerCards,
  loggedUser,
  isProfile,
  loading,
  numPhotosCol,
  handleDeleteSneaker,
}) {
  if (loading) {
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader size="small">Loading</Loader>
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    );
  }

  return (
    
      <Card.Group itemsPerRow={numPhotosCol}>
        {sneakerCards.map((sneaker) => {
          return (
            <SneakerCard
              sneaker={sneaker}
              key={sneaker._id}
              isProfile={isProfile}
              //   addLike={addLike}
              //   removeLike={removeLike}
              loggedUser={loggedUser}
              handleDeleteSneaker={handleDeleteSneaker}
            />
          );
        })}
      </Card.Group>
    
  );
}

export default SneakerDisplay;
