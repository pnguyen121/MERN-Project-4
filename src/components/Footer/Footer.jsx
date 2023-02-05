import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Icon
} from 'semantic-ui-react'







function Footer() {
    return ( 
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='' />
            <List link inverted>
              <List.Item as='a'>Gift Cards</List.Item>
              <List.Item as='a'>Promotions</List.Item>
              <List.Item as='a'>Find A Store</List.Item>
              <List.Item as='a'>Sign Up For Email</List.Item>
              <List.Item as='a'>Become A Member</List.Item>
              <List.Item as='a'>Nike Journal</List.Item>
              <List.Item as='a'>Send Us Feedback</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Get Help' />
            <List link inverted>
              <List.Item as='a'>Order Status</List.Item>
              <List.Item as='a'>Shipping and Delivery</List.Item>
              <List.Item as='a'>Returns</List.Item>
              <List.Item as='a'>Payment Options</List.Item>
              <List.Item as='a'>Gift Card Balance</List.Item>
              <List.Item as='a'>Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='About Nike' />
            <List link inverted>
              <List.Item as='a'>News</List.Item>
              <List.Item as='a'>Careers</List.Item>
              <List.Item as='a'>Investors</List.Item>
              <List.Item as='a'>Purpose</List.Item>
              <List.Item as='a'>Sustainability</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='' />
            <List link horizontal inverted>
              <List.Item as='a'><Icon name='twitter' size='large' /></List.Item>
              <List.Item as='a'><Icon name='facebook' size='large' /></List.Item>
              <List.Item as='a'><Icon name='youtube' size='large' /></List.Item>
              <List.Item as='a'><Icon name='instagram' size='large' /></List.Item>
              
            </List>
          </Grid.Column>
        </Grid>
        </Container>
        </Segment>


     )
}

export default Footer;