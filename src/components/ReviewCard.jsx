import { Card, Icon, Image, Popup, Rating } from "semantic-ui-react";
import React from "react";
import ReviewDetail from "./item/ReviewDetail";
import QuickReply from "./QuickReply";
import ItemRating from "./ItemRating";
import StringFormat from "../helpers/StringFormat";

export default props => {
  return (
        <Card fluid raised>
          <Image
            src={
              props.image ||
              "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
            }
          />
          <Card.Content>
            <Card.Header>{StringFormat.truncate(props.title,20) || "title"}</Card.Header>
            <Card.Meta>
              <span className="date">posted {props.created_at}</span>
            </Card.Meta>
              {/*Item rating*/}
              <ItemRating rating={props.rating} itemId={props.itemId}/>
            <Card.Description>
              {StringFormat.truncate(props.description, 100) || 'Checkout for more information'}
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
                description={props.description}
              />
            </div>
          </Card.Content>
        </Card>
  );
};
