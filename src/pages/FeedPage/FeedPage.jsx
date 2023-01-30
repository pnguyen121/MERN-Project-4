import { Grid } from "semantic-ui-react";






function FeedPage() {
    return ( 
        <Grid centered>
        <Grid.Row>
          <Grid.Column>
          <h2>Header Can Go Here</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <h2>Something</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <h2>Post Display Prob</h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
     );
}

export default FeedPage;