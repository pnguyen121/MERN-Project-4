import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import { Form, Grid, Checkbox, Button, Header, Image, Segment, Message } from "semantic-ui-react";

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from "../../utils/userService";

function SignUpPage({handleSignUpOrLogin}) {

const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
})

// state for file
const [selectedFile, setSelectedFile] = useState("");

const [error, setError] = useState('')


// Set up for navigate to work
const navigate = useNavigate()


async function handleSubmit(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append("photo", selectedFile);

    // Loop to append everything in state so we dont have to write it line for line like below
    // formData.append('username', state.username)
    for (let key in state){
        formData.append(key, state[key]);
    }


    try {
        await userService.signup(formData); // creates token and sets it in local storage

        handleSignUpOrLogin() //Call function that was passed through app.jsx. gets token and sets the user in app component state

        // navigate them to wherever after 
        navigate('/') //home feed page

    } catch(err){
        console.log(err)

        setError('Check your terminal, there was error signing up')

    }
}


function handleChange(e){
    setState({
        ...state,
        [e.target.name]: e.target.value,
    })
}

function handleFileInput(e){

    // Grabs the first file uploaded in the e.target.files array, will eventually grab multiple? 
    setSelectedFile(e.target.files[0])
}


  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", width: "100vw" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src="https://i.imgur.com/ZIrCjzu.png" /> Become A Member
        </Header>
        <Form onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              type="username"
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
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
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
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
              SignUp
            </Button>
          </Segment>
        </Form>
        {error ? <ErrorMessage error={error} /> : null}
      </Grid.Column>
    </Grid>
  );
}

export default SignUpPage;
