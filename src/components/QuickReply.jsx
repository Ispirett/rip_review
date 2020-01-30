import React, { useContext, useState } from "react";
import { actions, AppContext } from "../container/AppContainer";
import { Button, Input, Popup } from "semantic-ui-react";
import Utils from "./Utils";

const { host } = Utils;

const apiGetItems = async () => {
  try {
    let response = await fetch(host.domain + host.allItems);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

const apiReviewPost = async data => {
  try {
    const response = await fetch(host.domain + host.reviews, {
      method: "Post",
      headers: {
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
  const createReview = () => {
    const data = {
      comment: input,
      reviewable_id: props.itemId
    };

    if (input !== "") {
      apiReviewPost(data).then(response => {
        alert(response.status);
      });
    } else {
      alert("please enter some text");
    }
    apiGetItems().then(response => {
      dispatch({ type: actions.ITEMS, items: response });
      console.log(state.items);
    });
  };

  return (
    <Popup
      content="quick reply"
      on="click"
      pinned
      trigger={<Button color={'google plus'} content="comment" />}
      position='top center'
    >
      <Popup.Header>{input || "Write a quick comment"}</Popup.Header>
      <Popup.Content>
        <Input
          icon="tags"
          iconPosition="left"
          label={{ tag: true, content: "comment" }}
          labelPosition="right"
          placeholder="Enter tags"
          onChange={e => {
            setInput(e.target.value);
          }}
          required
        />
        <Button fluid size='tiny' color={'teal'} onClick={() => createReview()}> Post</Button>
      </Popup.Content>
    </Popup>
  );
};
