import { Card, Icon, Image, Popup, Rating } from "semantic-ui-react";
import React from "react";
import ReviewDetail from "./ReviewDetail";
import QuickReply from "./QuickReply";
export default props => {
  return (
    <Popup
      trigger={
        // Put this Card inIts on  Component ?
        <Card>
          <Image
            src={
              props.image ||
              "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
            }
          />
          <Card.Content>
            <Card.Header>{props.title || "title"}</Card.Header>
            <Card.Meta>
              <span className="date">posted {props.created_at}</span>
            </Card.Meta>
            <Card.Description>
              {props.description}
              Two sisters move to the country with their father in order to be
              closer to their hospitalized mother, and discover the surrounding
              trees are inhabited by magical spirits.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span>
              <Icon name="comment" />
              {props.reviewsCount || 0} reviews
            </span>

            <div className="ui two buttons">
              {/*quick reply*/}
              <QuickReply itemId={props.itemId} />
              {/*end of quick reply*/}
              <ReviewDetail
                image={props.image}
                title={props.title}
                reviews={props.reviews}
                itemId={props.itemId}
              />
            </div>
          </Card.Content>
        </Card>
      }
    >
      <Popup.Header>User Rating</Popup.Header>
      <Popup.Content>
        <Rating icon="star" defaultRating={3} maxRating={4} />
      </Popup.Content>
    </Popup>
  );
};
