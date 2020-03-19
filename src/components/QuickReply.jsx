import React, { useContext, useState } from "react";
import { actions, AppContext } from "../container/AppContainer";
import { Button, Icon, Input, Grid, Popup, Divider } from "semantic-ui-react";
import Utils from "../helpers/Utils";
import message from "./messages/message";

const { host } = Utils;

const apiGetItems = async () => {
  try {
    let response = await fetch(host.domain + host.allItems);
    return await response.json();
  } catch (e) {
    // console.log(e);
  }
};

const apiReviewPost = async (data, token) => {
  try {
    const response = await fetch(host.domain + host.reviews, {
      method: "Post",
      headers: {
        AuthToken: token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (e) {}
};

export default props => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const createReview = () => {
    const data = {
      comment: input,
      reviewable_id: props.itemId
    };
    if (!Utils.isLoggedIn(state))
      message({
        title: "Oops!",
        message: "you need to login in before commenting"
      });
    else if (input !== "") {
      apiReviewPost(data, state.authentication.token).then(response => {
        if (response.status === "failed") {
          // This is when token expires
          message({
            title: "Oops!",
            message: "please logout and log in again"
          });
        } else if (response.status === "success") {
          apiGetItems().then(response => {
            dispatch({ type: actions.ITEMS, items: response });
          });

          message({
            title: "Success",
            message: "Your message was created"
          });
        }
      });
    } else {
      message({
        title: "Oops!",
        message: "please enter some text"
      });
    }

    setInput("");
    setOpen(false);
  };

  return (
    <Popup
      on="click"
      trigger={
        <Button
          onClick={() => setOpen(true)}
          style={{ maxHeight: "2.5em" }}
          color={"google plus"}
          content="comment"
        />
      }
      open={open}
      closeOnTriggerBlur
      position="top center"
    >
      <Popup.Header>{input || "Write a quick comment"}</Popup.Header>
      <Popup.Content>
        <Input
          icon="mail"
          iconPosition="left"
          label={{ tag: true, content: "comment" }}
          labelPosition="right"
          placeholder="Write a short comment"
          onChange={e => {
            setInput(e.target.value);
          }}
          value={input}
          required
        />
        {/*<Button onClick={()=> t()} id={'emoji-button'}> Smile</Button>*/}
        <Divider />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button
            fluid
            size="tiny"
            color={"teal"}
            onClick={() => createReview()}
          >
            Post
          </Button>
          <Button color={"red"} onClick={() => setOpen(false)}>
            <Icon name="close" />
          </Button>
        </div>
      </Popup.Content>
    </Popup>
  );
};
