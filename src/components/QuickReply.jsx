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

const apiReviewPost = async (data,token) => {
  try {
    const response = await fetch(host.domain + host.reviews, {
      method: "Post",
      headers: {
        "AuthToken": token,
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
   if(!Utils.isLoggedIn(state)) return alert('Use need to login in before commenting');

    if (input !== "") {
      apiReviewPost(data, state.authentication.token).then(response => {
        if(response.status === 'failed')
          // This is when token expires
        alert('please logout and log in again');
        else if (response.status === 'success'){
          alert(response.status)
        }
        apiGetItems().then(response => {
          dispatch({ type: actions.ITEMS, items: response });
          console.log(state.items);
        });
      });
    } else {
      alert("please enter some text");
    }

  };

  return (
    <Popup
      on="click"
      pinned
      trigger={<Button style={{maxHeight: '2.5em'}} color={'google plus'} content="comment" />}
      position='top center'
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
          required
        />
        {/*<Button onClick={()=> t()} id={'emoji-button'}> Smile</Button>*/}
        <Button fluid size='tiny' color={'teal'} onClick={() => createReview()}> Post</Button>
      </Popup.Content>
    </Popup>
  );
};
