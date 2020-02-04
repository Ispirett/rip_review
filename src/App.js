import React,{useEffect} from "react";
import "./App.css";
import './css/main.css'
import "semantic-ui-css/semantic.min.css";
import AppContainer from "./container/AppContainer";
import MainContainer from "./container/MainContainer";
import HeaderContainer from "./container/HeaderContainer";



function App() {
return(
  <AppContainer >
     <HeaderContainer/>
     <MainContainer/>
   </AppContainer>
)
}

export default App;




