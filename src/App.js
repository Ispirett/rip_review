import React, {useState, useEffect, useContext} from "react";
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
  Form,
    Segment,
    Loader,
    Dimmer
} from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import MainMenu from "./components/MainMenu";
import AppContainer, {actions,AppContext} from "./container/AppContainer";

const host = {
  domain: "http://localhost:3000/api",
  allItems: "/items",
  reviews: '/reviews'
};

const apiGetItems = async () => {
  try {
    let response = await fetch(host.domain + host.allItems);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

const Notfication = () => (
    <Message>
      <Message.Header>Changes in Service</Message.Header>
      <p>
        We updated our privacy policy here to better service our customers. We
        recommend reviewing the changes.
      </p>
    </Message>
);


function App() {
return(
  <AppContainer>
   <ItemContainer/>
 </AppContainer>
)
}

export default App;


function ItemContainer() {
  const [state, dispatch] = useContext(AppContext);
  useEffect(() => {
    apiGetItems().then(response => {
      dispatch({type: actions.ITEMS, items: response});
      console.log(state.items);
    });
  }, []);
  if (state.items.length === 0) {
    return (
        <Segment raised style={{height: '100vh', background: 'black'}}>
          <Dimmer active inverted style={{background: '#262626'}}>
            <Image src='https://i.imgur.com/4FO9toe.gif'/>
          </Dimmer>
        </Segment>
    )
  } else
    console.log(state.items)
  return (
      <div style={{width: '80%', margin: 'auto'}}>
        <Notfication/>
        <Grid>
          <Grid.Row>
            <GridColumn width={3}>
              {/*<Feeder />*/}
              <MainMenu/>
            </GridColumn>

            <GridColumn width={13}>
              <Grid>
                <Grid.Row columns={4}>
                  {
                    state.items.map((item, index) => {
                      return (
                          <Grid.Column key={index} style={{marginBottom: '2em'}}>
                            <ReviewCard
                                itemId={item.id}
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
      </div>
  );
}
  const ReviewCard = props => {
    return (
        <Popup
            trigger={
              <Card>
                <Image
                    src={props.image || "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"}/>
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
              <Icon name="comment"/>
              {props.reviewsCount || 22} reviews
            </span>

                  <div className='ui two buttons'>
                    {/*quick reply*/}
                    <QuickReply itemId={props.itemId}/>
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
            <Rating icon="star" defaultRating={3} maxRating={4}/>
          </Popup.Content>
        </Popup>
    );
  };

  const apiReviewPost = async (data) => {
    try {
      const response = await fetch(host.domain + host.reviews, {
        method: "Post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      return await response.json()
    } catch (e) {

    }
  };

  const QuickReply = (props) => {
    const [input, setInput] = useState('');
    const [state, dispatch] = useContext(AppContext);
    const createReview = () => {
      const data = {
        "comment": input,
        "reviewable_id": props.itemId
      };

      if (input !== '') {
        apiReviewPost(data).then(response => {
          alert(response.status)
        })
      } else {
        alert('please enter some text')
      }
      apiGetItems().then(response => {
        dispatch({type: actions.ITEMS, items:response});
        console.log(state.items);
      });

    };

    return (
        <Popup
            content='quick reply'
            on='click'
            pinned
            trigger={<Button primary content='comment'/>}
        >
          <Popup.Header>

            {input || 'Write a quick comment'}
          </Popup.Header>
          <Popup.Content>
            <Input
                icon='tags'
                iconPosition='left'
                label={{tag: true, content: 'comment'}}
                labelPosition='right'
                placeholder='Enter tags'
                onChange={(e) => {
                  setInput(e.target.value)
                }}
                required
            />
            <button onClick={() => createReview()}> Post</button>
          </Popup.Content>
        </Popup>
    )
  };

  const Feeder = () => (
      <Card>
        <Card.Content>
          <Card.Header>Recent Activity</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/>
              <Feed.Content>
                <Feed.Date content="1 day ago"/>
                <Feed.Summary>
                  You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/>
              <Feed.Content>
                <Feed.Date content="3 days ago"/>
                <Feed.Summary>
                  You added <a>Molly Malone</a> as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/>
              <Feed.Content>
                <Feed.Date content="4 days ago"/>
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

          {/*Comments*/}
          <Comments reviews={props.reviews} itemId={props.itemId}/>

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary>
          Close <Icon name="right chevron"/>
        </Button>

      </Modal.Actions>
    </Modal>
  };

  const UserComment = (props) => (
      <Comment>
        <Comment.Avatar src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/>
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


  const Comments = (props) => {
    const [input, setInput] = useState('');
    const createReview = () => {
      const data = {
        "comment": input,
        "reviewable_id": props.itemId
      };
      apiReviewPost(data).then(response => {
        alert(response.status)

      })
    };
    return <Comment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>

      {
        props.reviews.length === 0 ? '' :
            props.reviews.map((review, index) => {
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

      <Form reply onSubmit={() => createReview()}>
        <Form.TextArea onChange={(e) => setInput(e.target.value)} required/>
        <Button content="Add Reply" labelPosition="left" icon="edit" primary/>
      </Form>
    </Comment.Group>
  };
