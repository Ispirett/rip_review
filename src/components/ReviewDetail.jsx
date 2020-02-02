import React, {useContext, useEffect, useState} from "react";
import {actions, AppContext} from "../container/AppContainer";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";
import Comments from "./Comments";
import Utils from "./Utils";

// const { host } = Utils;

// const apiGetItems = async () => {
//     try {
//         let response = await fetch(host.domain + host.allItems);
//         return await response.json();
//     } catch (e) {
//         console.log(e);
//     }
// };
//
// const apiReviewPost = async data => {
//     try {
//         const response = await fetch(host.domain + host.reviews, {
//             method: "Post",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         });
//         return await response.json();
//     } catch (e) {}
// };


export default props => {
  const [state, dispatch] = useContext(AppContext);
    const [input, setInput] = useState("");

  return (
    <Modal trigger={<Button onClick={() => console.log(props.itemId)}>Show Details</Button>}>
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src={
            props.image ||
            "https://odis.homeaway.com/odis/listing/b4fb6569-8d2e-48c5-85c3-08fa74ff2a0e.c10.jpg"
          }
        />
        <Modal.Description>
          <Header>{props.title || "Review Title"}</Header>
          <p>{props.description || "Comment to get more details"}</p>

          {/*Comments*/}
          <Comments reviews={props.reviews} itemId={props.itemId} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary>
          Close <Icon name="right chevron" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
