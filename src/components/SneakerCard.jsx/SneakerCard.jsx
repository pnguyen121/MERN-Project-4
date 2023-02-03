import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SneakerCard({
  sneaker,
  isProfile,
  loggedUser,
  handleDeleteSneaker,
  addLike,
  removeLike,
}) {
  console.log(sneaker, "<----------- sneaker on sneaker card");

  // 1. search the likes array and see if the loggedUser.username exists in the likes array
  const likedIndex = sneaker.likes.findIndex(
    (like) => like.username === loggedUser.username
  );
  // like.username === loggedUser.username <- if this true it returns the index 0  or greater
  // like.username === loggedUser.username <- if this is false it returns -1
  const likeColor = likedIndex > -1 ? "red" : "grey";
  // if the likedIndex is 0 or greater that means the loggedUser username is in the
  // post.likes array, which means they have liked the post so color should be red
  const clickHandler =
    likedIndex > -1
      ? () => removeLike(sneaker.likes[likedIndex]._id)
      : () => addLike(sneaker._id);
  /// FOR THE ARGUMENTS go remind yourself what they need by looking at the util function! or your routes on the backend
  //if the logged user’s username is NOT in the likes array,
  // then the logged in user has NOT like the photo so the color should be grey

  return (
    <Card raised key={sneaker._id}>
      <Card.Content>
        <Link to={`/${sneaker.sneakerName}`}>
          <Card.Description>{sneaker.sneakerName}</Card.Description>
          <Card.Header>{sneaker.nickname}</Card.Header>
        </Link>
      </Card.Content>

      <Image src={`${sneaker.photoUrl}`} ui={false} />
      <Card.Content extra>
        <Icon name={"heart"} size="large" color={likeColor} onClick={clickHandler}/>
        {sneaker.likes.length} Likes
        <Button
          floated="right"
          icon
          onClick={() => handleDeleteSneaker(sneaker._id)}
        >
          <Icon name="trash" />
        </Button>
      </Card.Content>
    </Card>
  );
}

export default SneakerCard;
