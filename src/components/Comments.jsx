import { Button, Comment, Form, Header } from "semantic-ui-react";
import React, { useContext, useState } from "react";
import { AppContext } from "../container/AppContainer";
import Utils from "./Utils";
const { host } = Utils;

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

const UserComment = props => (
  <Comment>
    <Comment.Avatar src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />
    <Comment.Content>
      <Comment.Author as="a">{props.name || "Username"}</Comment.Author>
      <Comment.Metadata>
        <div>{props.created_at || "Today at 5:42PM"}</div>
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
  const createReview = () => {
    const data = {
      comment: input,
      reviewable_id: props.itemId
    };
    apiReviewPost(data).then(response => {
      alert(response.status);
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
                name={review.user.email}
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
        <Form.TextArea onChange={e => setInput(e.target.value)} required />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    </Comment.Group>
  );
};
