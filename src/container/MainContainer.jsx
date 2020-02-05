import React, {useContext, useEffect, useState} from "react";
import { actions, AppContext } from "./AppContainer";
import {
  Dimmer,
  Grid,
  GridColumn,
  Image,
  Message,
  Segment,
    Responsive
} from "semantic-ui-react";
import MainMenu from "../components/MainMenu";
import ReviewCard from "../components/ReviewCard";
import Utils from "../components/Utils";
import {LazyLoadComponent} from 'react-lazy-load-image-component'
const { host } = Utils;

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

export default () => {
  const [state, dispatch] = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiGetItems().then(response => {
      dispatch({ type: actions.ITEMS, items: response });
      setLoading(false);
      console.log(state.items);
    });
  }, []);

  if (loading) {
    return (
      <Segment raised style={{ height: "100vh", background: "black" }}>
        <Dimmer active inverted style={{ background: "#262626" }}>
          <Image src="https://i.imgur.com/4FO9toe.gif" />
        </Dimmer>
      </Segment>
    );
  } else console.log(state.items);
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Grid stackable doubling>
        <Grid.Row>
            {/*<GridColumn width={3} >*/}
            {/*  /!*<Feeder />*!/*/}
            {/*  <MainMenu />*/}
            {/*</GridColumn>*/}

          <GridColumn >
            <Grid columns='four' stackable doubling >
              <Grid.Row >
                {state.items.map((item, index) => {
                  return (
                    <Grid.Column key={index} style={{ marginBottom: "2em" }} >
                      <LazyLoadComponent>
                      <ReviewCard
                        itemId={item.id}
                        title={item.title}
                        description={item.description}
                        created_at={item.created_at}
                        image={item.image}
                        reviewsCount={item.reviewsCount}
                        reviews={item.reviews}
                        rating={item.rating}
                      />
                      </LazyLoadComponent>
                    </Grid.Column>

                  );
                })}
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
};
