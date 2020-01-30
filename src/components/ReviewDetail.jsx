import React, { useContext } from "react";
import { AppContext } from "../container/AppContainer";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";
import Comments from "./Comments";
export default props => {
  const [state, dispatch] = useContext(AppContext);
  return (
    <Modal trigger={<Button>ShowDetails..</Button>}>
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
          <p>This is what happened and i am still having issues.</p>

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
