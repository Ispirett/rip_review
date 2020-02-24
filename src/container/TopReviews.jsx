import React, { useContext, useEffect } from "react";
import { Grid, Image, Divider } from "semantic-ui-react";
import { actions, AppContext } from "./AppContainer";
import Utils from "../helpers/Utils";
const { host } = Utils;
const apiGetTopRated = async token => {
  try {
    const response = fetch(host.domain + host.topRated, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AuthToken: token
      }
    });

    return (await response).json();
  } catch (e) {}
};

const TopReviews = () => {
  const [state, dispatch] = useContext(AppContext);
  useEffect(() => {
    apiGetTopRated(state.authentication.token).then(response => {
      console.log(response);
      dispatch({ type: actions.TOP_RATED, topRated: response });
    });
  });
  return (
    <div className={"wrapper"} >
      <h1>Top Reviews</h1>
      <Divider />
      <Grid columns={4} stackable doubling  className={'top-rated-container'}>
        {state.topRated.map((item, index) => {
          return (
            <TopItem
              key={index}
              image={item.image}
              color={item.rating <3 ? "red" : "green"}
              content={item.rating <3 ? "good":"bad"}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default TopReviews;

const TopItem = props => {
  return (
    <Grid.Column >
      <Image
        className={'top-rated'}
        fluid
        size={"large"}
        label={{
          as: "a",
          color: props.color,
          content: props.content,
          icon: "spoon",
          ribbon: true
        }}
        src={props.image}
      />
    </Grid.Column>
  );
};
