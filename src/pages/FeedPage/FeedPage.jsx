import { Container, Grid } from "semantic-ui-react";

import NavBar from "../../components/NavBar/NavBar";

function FeedPage({loggedUser, handleLogout}) {
  return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <NavBar loggedUser={loggedUser} handleLogout={handleLogout}/>
            <h2>Header Can Go Here</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <h2>Something</h2>
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
