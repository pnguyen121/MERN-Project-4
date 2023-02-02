import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SneakerCard({ sneaker, isProfile, loggedUser }) {
  console.log(sneaker, "<----------- sneaker on sneaker card");

  return (

    <Link to={`/sneaker/${sneaker.sneakerName}`}>
    <Card fluid raised key={sneaker._id}>
      <Image src={sneaker.photoUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{sneaker.sneakerName}</Card.Description>
        <Card.Header>{sneaker.nickname}</Card.Header>
        <Card.Description>
          
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="heart" />
          Like
        </a>
      </Card.Content>
    </Card>
    </Link>
  );
}

export default SneakerCard;
