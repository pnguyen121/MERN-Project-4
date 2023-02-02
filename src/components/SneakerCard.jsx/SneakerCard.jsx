import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SneakerCard({ sneaker, isProfile, loggedUser, handleDeleteSneaker }) {
  console.log(sneaker, "<----------- sneaker on sneaker card");

//   function deleteSneaker(sneakerId) {
//     handleDeleteSneaker();
//   }

  return (    
      <Card raised key={sneaker._id}>
        <Card.Content>
        <Link to={`/${sneaker.sneakerName}`}>
          <Card.Description>{sneaker.sneakerName}</Card.Description>
          <Card.Header>{sneaker.nickname}</Card.Header>
        </Link>
          <Card.Description>
          </Card.Description>
        </Card.Content>

        
        <Image src={`${sneaker.photoUrl}`} ui={false}/>
        <Card.Content extra>
          <Button icon>
            <Icon name="heart"/> Like
          </Button>
          <Button floated='right' icon onClick={() => handleDeleteSneaker(sneaker._id)}>
            <Icon name="trash" />
          </Button>
        </Card.Content>
      </Card>
  );
}

export default SneakerCard;
