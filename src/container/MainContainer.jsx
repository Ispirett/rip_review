import React, {useContext, useEffect, useState} from "react";
import { actions, AppContext } from "./AppContainer";
import {
  Dimmer,
  Grid,
  GridColumn,
  Image,
  Segment,
  Divider, Responsive
} from "semantic-ui-react";

import ReviewCard from "../components/ReviewCard";
import Utils from "../helpers/Utils";
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

export default () => {
  const [state, dispatch] = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiGetItems().then(response => {
      dispatch({ type: actions.ITEMS, items: response });
      setLoading(false);
      // console.log(state.items);
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
    <div className={'wrapper'}>

      <h1>Active Reviews</h1>
      <Divider/>
      <Grid stackable doubling>
        <Grid.Row>
            {/*<GridColumn width={3} >*/}
            {/*  /!*<Feeder />*!/*/}
            {/*  <MainMenu />*/}
            {/*</GridColumn>*/}

          <GridColumn >
            {/*Large screens*/}
            <Responsive minWidth={1350}>
              <Grid columns='five' stackable doubling >
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
              </Grid>
            </Responsive>
            {/*..............*/}

            {/*Small screens*/}
            <Responsive maxWidth={1350}>
              <Grid columns='three' stackable doubling >
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
              </Grid>
            </Responsive>

          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
};
