import {
  Button,
  Comment,
  Form,
  Header,
  Popup,
  Rating
} from "semantic-ui-react";
import React, { useContext, useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { actions, AppContext } from "../container/AppContainer";
import Utils from "../helpers/Utils";
import CommentSettings from "./CommentSettings";
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

const UserComment = props => (
  <Comment>
    <Comment.Avatar src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />
    <Comment.Content>
      {/*  Settings Popup */}
        <CommentSettings trigger={<Comment.Author as="a">@{props.name || "Username"}</Comment.Author>}/>
      <Comment.Metadata>
        <div>{props.created_at || "Today at 5:42PM"}</div>
      </Comment.Metadata>
      <Comment.Metadata>
        <Rating
          maxRating={5}
          rating={props.rating}
          disabled
        />
      </Comment.Metadata>
      <Comment.Text>{props.comment || "Comment here"}</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

export default props => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useContext(AppContext);
  //Probably consider and loading spinner

  const createReview = () => {
    if (!Utils.isLoggedIn(state))
        message({
          title: 'Oops!',
          message: "you need to login in before commenting"
      });

    const data = {
      comment: input,
      reviewable_id: props.itemId
    };

    apiReviewPost(data, state.authentication.token).then(response => {
        if(response.status === 'success')
        message({
            title: 'Success',
            message: "Your review was saved!"
        });
        else if(response.status === 'failed'){
            message({
                title: 'Oops!',
                message: response.msg
            });
        }

      apiGetItems().then(response => {
        dispatch({ type: actions.ITEMS, items: response });
        //console.log(state.items);
      });
      setInput('')
    });
  };

  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>

      {props.reviews.length === 0
        ? ""
        : props.reviews.map((review, index) => {
            return (
              <UserComment
                key={index}
                name={review.username}
                rating={review.item_rating}
                created_at={review.created_at}
                comment={review.comment}
              />
            );
          })}

      {/*<Comment>*/}
      {/*  <Comment.Avatar src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />*/}
      {/*  <Comment.Content>*/}
      {/*    <Comment.Author as="a">Elliot Fu</Comment.Author>*/}
      {/*    <Comment.Metadata>*/}
      {/*      <div>Yesterday at 12:30AM</div>*/}
      {/*    </Comment.Metadata>*/}
      {/*    <Comment.Text>*/}
      {/*      <p>This has been very useful for my research. Thanks as well!</p>*/}
      {/*    </Comment.Text>*/}
      {/*    <Comment.Actions>*/}
      {/*      <Comment.Action>Reply</Comment.Action>*/}
      {/*    </Comment.Actions>*/}
      {/*  </Comment.Content>*/}
      {/*  <Comment.Group>*/}
      {/*    <Comment>*/}
      {/*      <Comment.Avatar src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />*/}
      {/*      <Comment.Content>*/}
      {/*        <Comment.Author as="a">Jenny Hess</Comment.Author>*/}
      {/*        <Comment.Metadata>*/}
      {/*          <div>Just now</div>*/}
      {/*        </Comment.Metadata>*/}
      {/*        <Comment.Text>Elliot you are always so right :)</Comment.Text>*/}
      {/*        <Comment.Actions>*/}
      {/*          <Comment.Action>Reply</Comment.Action>*/}
      {/*        </Comment.Actions>*/}
      {/*      </Comment.Content>*/}
      {/*    </Comment>*/}
      {/*  </Comment.Group>*/}
      {/*</Comment>*/}

      {/*<Comment>*/}
      {/*  <Comment.Avatar src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />*/}
      {/*  <Comment.Content>*/}
      {/*    <Comment.Author as="a">Joe Henderson</Comment.Author>*/}
      {/*    <Comment.Metadata>*/}
      {/*      <div>5 days ago</div>*/}
      {/*    </Comment.Metadata>*/}
      {/*    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>*/}
      {/*    <Comment.Actions>*/}
      {/*      <Comment.Action>Reply</Comment.Action>*/}
      {/*    </Comment.Actions>*/}
      {/*  </Comment.Content>*/}
      {/*</Comment>*/}

      <Form reply onSubmit={() => createReview()}>
        <Form.TextArea
          onChange={e => setInput(e.target.value)}
          value={input}
          required
        />
        <Button
          content="Add Reply"
          labelPosition="left"
          icon="edit"
          color={"teal"}
        />
      </Form>
      <Emoji
        onClick={(emoji, event) => setInput(prev => (prev += emoji.native))}
      />
    </Comment.Group>
  );
};

const Emoji = props => (
  <Popup
    trigger={
      <Button
        style={{
          background: "transparent",
          position: "relative",
          bottom: 90,
          right: 15
        }}
      >
        <img
          src={
            "data:image/jpeg;base64,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"
          }
          width={"20px"}
          alt={"image"}
        />
      </Button>
    }
    position={"top left"}
    on={"click"}
    pinned
  >
    <Popup.Content>
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        onClick={(emoji, event) => props.onClick(emoji, event)}
      />
    </Popup.Content>
  </Popup>
);
