import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function DetailDisplay({ sneakers, addLike, removeLike }) {
  

  return (
    <Card>
      <Image src={sneakers.photoUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{sneakers.sneakerName}</Card.Header>
        <Card.Meta>
          <span>{sneakers.nickname}</span>
        </Card.Meta>
        <Card.Description>{sneakers.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
  );
}

export default DetailDisplay;
