import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function DetailDisplay({ sneakers }) {
  return (
    <Card>
    <Image src={sneakers.photoUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{sneakers.sneakerName}</Card.Header>
      <Card.Meta>
        <span>{sneakers.nickname}</span>
      </Card.Meta>
      <Card.Description>
        {sneakers.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Likes
      </a>
    </Card.Content>
  </Card>
  );
}

export default DetailDisplay;
