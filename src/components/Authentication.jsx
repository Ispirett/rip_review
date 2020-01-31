import React, { useContext, useState } from "react";
import { actions, AppContext } from "../container/AppContainer";
import { Button, Form, Icon, Input, Popup } from "semantic-ui-react";
import Utils from "./Utils";
const { host, tokenStore} = Utils;



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
    console.log(e);
  }
};

export default () => {
  const [state, dispatch] = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    console.log(email, password);
    const data = {
      email: email,
      password: password
    };
    apiLogin(data).then(response => {
      alert(response.status + response.token);
      dispatch({ type: actions.AUTH, token: response.token });
      dispatch({ type: actions.AUTH, token: response.token });
    });
  };

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
            <Button color={"google plus"} content={"SignIn"}>
              {" "}
              <Icon name="user" /> SignIn
            </Button>
          }
          content={"This is really kool here"}
          position="bottom right"
        >
          <Popup.Header>Sign In</Popup.Header>
          <Popup.Content>
            <Form onSubmit={e => handleLogin(e)}>
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
            <Button color={"google plus"} content={"SignUp"}>
              {" "}
              <Icon name="user" /> SignUp
            </Button>
          }
          content={"This is really kool here"}
          position="bottom right"
        >
          <Popup.Header>Become a Member</Popup.Header>
          <Popup.Content>
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="Name"
                  placeholder="Name"
                  onChange={e =>
                    dispatch({
                      type: actions.AUTH,
                      credentials: { name: e.target.value }
                    })
                  }
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Username"
                  placeholder="Username"
                  onChange={e =>
                    dispatch({
                      type: actions.AUTH,
                      credentials: { username: e.target.value }
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Field
                  id="form-input-control-error-email"
                  control={Input}
                  label="Email"
                  placeholder="name@example.com"
                  onChange={e =>
                    dispatch({
                      type: actions.AUTH,
                      credentials: { email: e.target.value }
                    })
                  }
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
                  onChange={e =>
                    dispatch({
                      type: actions.AUTH,
                      credentials: { password: e.target.value }
                    })
                  }
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
