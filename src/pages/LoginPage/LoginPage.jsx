import React, { useState } from "react";
import "./LoginPage.css";

import { Link } from "react-router-dom";


import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Checkbox,
} from "semantic-ui-react";

export default function LoginPage(props) {

  // State for the form inputs and such
  const [state, setState] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState('')




  // Function to handle what is being typed into form to be in state. Use this function in form
  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }




  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", width: "100vw" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src="https://i.imgur.com/ZIrCjzu.png" /> Log-in to your account
        </Header>
        <Form>
          <Segment stacked>
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Button
              color="black"
              fluid
              size="large"
              type="submit"
              className="btn"
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New Here? <Link to="/signup">Sign Up</Link>
        </Message>
        {/* {error ? <ErrorMessage error={error} /> : null} */}
      </Grid.Column>
    </Grid>
  );
}
