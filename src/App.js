import React from "react";
import "./App.css";
import './css/main.css'
import "semantic-ui-css/semantic.min.css";
import AppContainer from "./container/AppContainer";
import MainContainer from "./container/MainContainer";
import HeaderContainer from "./container/HeaderContainer";
import TopReviews from "./container/TopReviews";
import ReactGA from "react-ga";
const trackingId = "UA-159879631-1";
ReactGA.initialize(trackingId);

function App() {
return(
  <AppContainer >
     <HeaderContainer/>
     <TopReviews/>
     <MainContainer/>
   </AppContainer>
)
}

export default App;




