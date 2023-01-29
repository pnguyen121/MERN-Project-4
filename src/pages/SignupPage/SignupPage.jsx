import React from "react";


import { Form, Grid, Checkbox, Button, Header, Image, Segment, Message } from "semantic-ui-react";

function SignUpPage() {
  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", width: "100vw" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src="https://i.imgur.com/ZIrCjzu.png" /> Sign Up
        </Header>
        <Form>
          <Segment stacked>
            <Form.Input
              type="username"
              name="username"
              placeholder="username"
              // value={state.email}
              // onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              // value={state.email}
              // onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              // value={state.password}
              // onChange={handleChange}
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
            //   value={state.passwordConf}
            //   onChange={handleChange}
              required
            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                // onChange={handleFileInput}
              />
            </Form.Field>
            <Form.Field required>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
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
        {/* {error ? <ErrorMessage error={error} /> : null} */}
      </Grid.Column>
    </Grid>
  );
}

export default SignUpPage;
