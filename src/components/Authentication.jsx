import React, { useContext, useState } from "react";
import { actions, AppContext } from "../container/AppContainer";
import { Button, Form, Icon, Input, Popup} from "semantic-ui-react";
import Utils from "../helpers/Utils";
import message from "./messages/message";
import ReactGA from 'react-ga'
import ErrorHunter from "error_hunter/src/error_hunter";
const { host} = Utils;



const apiLogin = async data => {
  try {
    const response = await fetch(host.main + host.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return response.json();
  } catch (e) {
    // console.log(e);
  }
};

const apiSignUp = async data => {
    try {
        const response = await fetch(host.main + host.signUp, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return response.json();
    } catch (e) {
        // console.log(e);
    }
};


export default () => {
  const [state, dispatch] = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    };
    apiLogin(data).then(response => {
      if(response.status === 'success') {
          // alert(response.status);
          ErrorHunter.add_error('Login', 'User logged in perfectly',response,'info');
          message({
              title: 'Login Success',
              message: 'you are logged in!'
          });
          dispatch({type: actions.AUTH, token: response.token, user:response.user});
          // set for google a
          ReactGA.set({
            user: response.user.username
          });
          ReactGA.event({
              category: "Sign In",
              action: `user ${response.user.username} just signed up`,
          });

      }
      else if(response.status === 'failed'){
          message({
              title: 'Login Failed',
              message: response.msg
          });
      }
    });
  };

  const handleSignUp = (e) =>{
      e.preventDefault();
      const data = {
         user:{ email: email,
          password: password,
          username: username,
          name:name
      }};
      apiSignUp(data).then(response =>{
          if (response.status === 'success') {
              dispatch({type: actions.AUTH, token: response.token})
              message({
                  title: 'Sign UP Successful',
                  message: `Welcome ${response.user.username}!`
              });
              // google
              ReactGA.event({
                  category: "Sign Up",
                  action: `user ${data.user.username} just signed up`,
              });
          }
          else if(response.status === 'failed'){
              message({
                  title: 'Sign Up Failed',
                  message: response.msg
              });
          }

      })
  }

  if (state.authentication.login) {
    return (
      <Button onClick={() => dispatch({type:actions.LOGOUT})} color={"google plus"}>
        <Icon name="log out" /> Logout{" "}
      </Button>
    );
  } else {
    return (
      <div>

        <Popup
          pinned
          on="click"
          trigger={
            <Button color={"google plus"} >
              <Icon name="user" /> SignIn
            </Button>
          }
          position="bottom right"
        >

          <Popup.Header>Sign In</Popup.Header>
          <Popup.Content>
            <Form  warning success onSubmit={e => handleLogin(e)}>
              <Form.Field
                id="form-input-control-error-email"
                control={Input}
                label="Email"
                placeholder="name@example.com"
                onChange={e => setEmail(e.target.value)}
                // error={{
                //     content: 'Please enter a valid email address',
                //     pointing: 'below',
                // }}
              />
              <Form.Field
                id="form-input-control-password"
                control={Input}
                label="Password"
                placeholder="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              <Form.Field
                id="form-button-control-public"
                control={Button}
                content="Confirm"
                color={"teal"}
                label="have a good day!"
              />
            </Form>
          </Popup.Content>
        </Popup>
        {/*  Sing In*/}
        <Popup
          pinned
          on="click"
          trigger={
            <Button color={"google plus"} >
              <Icon name="user" /> SignUp
            </Button>
          }
          position="bottom right"

        >
          <Popup.Header>Become a Member</Popup.Header>
          <Popup.Content >
            <Form warning success onSubmit={(e) => handleSignUp(e)}>
              <Form.Group width="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="Name"
                  placeholder="Name"
                  onChange={e => setName(e.target.value)}
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Username"
                  placeholder="Username"
                  onChange={e =>  setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Field
                  id="form-input-control-error-email"
                  control={Input}
                  label="Email"
                  placeholder="name@example.com"
                  onChange={e => setEmail(e.target.value )}
                  // error={{
                  //     content: 'Please enter a valid email address',
                  //     pointing: 'below',
                  // }}
                />
                <Form.Field
                  id="form-input-control-password"
                  control={Input}
                  label="Password"
                  placeholder="Password"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Field
                id="form-button-control-public"
                control={Button}
                content="Confirm"
                color={"teal"}
                label="have a good day!"
              />
            </Form>
          </Popup.Content>
        </Popup>

      </div>
    );
  }
};
