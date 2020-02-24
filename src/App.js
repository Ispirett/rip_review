import React,{useEffect} from "react";
import "./App.css";
import './css/main.css'
import "semantic-ui-css/semantic.min.css";
import AppContainer from "./container/AppContainer";
import MainContainer from "./container/MainContainer";
import HeaderContainer from "./container/HeaderContainer";
import TopReviews from "./container/TopReviews";
import Message from "./components/messages/message";



function App() {
return(
  <AppContainer >
      <Message time={3000}/>
     <HeaderContainer/>
     <TopReviews/>
     <MainContainer/>
   </AppContainer>
)
}

export default App;




