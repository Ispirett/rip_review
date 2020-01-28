import React, { useState, useEffect } from "react";

import {
  Button,
  Menu,
  Popup,
  Modal,
  Header,
  Icon,
  Image,
  Card,
  Rating,
  Grid,
  GridColumn,
  Container,
  Message,
  Feed,
  Input,
  Comment,
  Form
} from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
const users = [
  {
    name: "Elliot Fu",
    bio: "Elliot has been a member since July 2012",
    avatar: "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
  },
  {
    name: "Stevie Feliciano",
    bio: "Stevie has been a member since August 2013",
    avatar: "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
  },
  {
    name: "Matt",
    bio: "Matt has been a member since July 2014",
    avatar: "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
  }
];

const host = {
  domain: "http://localhost:3000/api",
  allItems: "/items"
};

const apiGetItems = async () => {
  try {
    let response = await fetch(host.domain + host.allItems);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    apiGetItems().then(r => {
      setItems(r)
      console.log(items);
    });
  }, []);
  if(items.length === 0){
    return <h1>loading..........</h1>
  }
  else
    console.log(items)
  return (
    <Grid>
      <Grid.Row>
        <GridColumn width={3}>
          <Feeder />
        </GridColumn>

        <GridColumn width={13}>
          <Grid>
            <Grid.Row columns={4}>
              {
                items.map((item,index )=>{
                    return(
                        <Grid.Column key={index}>
                          <ReviewCard
                          title={item.title}
                          created_at={item.created_at}
                          image={item.image}
                          reviewsCount={item.reviewsCount}
                          reviews={item.reviews}
                          />
                        </Grid.Column>
                    )


                })
              }

            </Grid.Row>

            {/*<Grid.Row columns={4}>*/}
            {/*  <Grid.Column>*/}
            {/*    <ReviewCard />*/}
            {/*  </Grid.Column>*/}
            {/*  <Grid.Column>*/}
            {/*    <ReviewCard />*/}
            {/*  </Grid.Column>*/}
            {/*  <Grid.Column>*/}
            {/*    <ReviewCard />*/}
            {/*  </Grid.Column>*/}
            {/*  <Grid.Column>*/}
            {/*    <ReviewCard />*/}
            {/*  </Grid.Column>*/}
            {/*</Grid.Row>*/}

            {/*<Grid.Row columns={4}>*/}
            {/*  <Grid.Column>*/}
            {/*    <ReviewCard />*/}
            {/*  </Grid.Column>*/}
            {/*  <Grid.Column>*/}
            {/*    <ReviewCard />*/}
            {/*  </Grid.Column>*/}
            {/*  <Grid.Column>*/}
            {/*    <ReviewCard />*/}
            {/*  </Grid.Column>*/}
            {/*  <Grid.Column>*/}
            {/*    <ReviewCard />*/}
            {/*  </Grid.Column>*/}
            {/*</Grid.Row>*/}
          </Grid>
        </GridColumn>
      </Grid.Row>
    </Grid>
  );
}

export default App;

const ReviewCard = props => {
  return (
    <Popup
      trigger={
        <Card>
          <Image src={props.image || "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"} />
          <Card.Content>
            <Card.Header>{props.title || 'title'}</Card.Header>
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
              {props.reviewsCount || 22} reviews
            </span>
            <ReviewDetail
                image={props.image}
                title={props.title}
                reviews={props.reviews}
            />
            {/*<Popup*/}
            {/*    content='I will not flip!'*/}
            {/*    on='click'*/}
            {/*    pinned*/}
            {/*    trigger={<Button content='comment' />}*/}
            {/*>*/}
            {/*  <Popup.Header>*/}
            {/*    Write a quick comment*/}
            {/*  </Popup.Header>*/}
            {/*  <Popup.Content>*/}
            {/*    <Input*/}
            {/*        icon='tags'*/}
            {/*        iconPosition='left'*/}
            {/*        label={{ tag: true, content: 'comment' }}*/}
            {/*        labelPosition='right'*/}
            {/*        placeholder='Enter tags'*/}
            {/*    />*/}
            {/*  </Popup.Content>*/}
            {/*</Popup>*/}
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

const Feeder = () => (
  <Card>
    <Card.Content>
      <Card.Header>Recent Activity</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />
          <Feed.Content>
            <Feed.Date content="1 day ago" />
            <Feed.Summary>
              You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />
          <Feed.Content>
            <Feed.Date content="3 days ago" />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />
          <Feed.Content>
            <Feed.Date content="4 days ago" />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

const ReviewDetail = (props) => {
  return <Modal trigger={<Button>ShowDetails..</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image>
      <Image
          wrapped
          size="medium"
          src={props.image || "https://odis.homeaway.com/odis/listing/b4fb6569-8d2e-48c5-85c3-08fa74ff2a0e.c10.jpg"}
      />
      <Modal.Description>
        <Header>{props.title || 'Review Title'}</Header>
        <p>This is what happened and i am still having issues.</p>
        <Comments reviews={props.reviews}/>

      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Close <Icon name="right chevron"/>
      </Button>
    </Modal.Actions>
  </Modal>
};

const UserComment  = (props) =>(
    <Comment>
      <Comment.Avatar src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />
      <Comment.Content>
        <Comment.Author as="a">{props.name || 'Username'}</Comment.Author>
        <Comment.Metadata>
          <div>{props.created_at || 'Today at 5:42PM'}</div>
        </Comment.Metadata>
        <Comment.Text>{props.comment || 'Comment here'}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
);

const Comments = (props) => (
  <Comment.Group>
    <Header as="h3" dividing>
      Comments
    </Header>

    {
      props.reviews.length === 0 ? '' :
          props.reviews.map((review, index) =>{
            return <UserComment key={index}
                                name={review.user.email}
                                created_at={review.created_at}
                                comment={review.comment}
            />
          })
    }

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

    <Form reply>
      <Form.TextArea />
      <Button content="Add Reply" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
);
