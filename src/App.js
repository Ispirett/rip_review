import React,{useEffect} from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import AppContainer from "./container/AppContainer";
import MainContainer from "./container/MainContainer";
import HeaderContainer from "./container/HeaderContainer";
import EmojiButton from '@joeattardi/emoji-button';

// const button = document.querySelector('#emoji-button');
// const picker = new EmojiButton();
//
// picker.on('emoji', emoji => {
//     document.querySelector('input').value += emoji;
// });
// if(button !== null)
// setTimeout(()=>{
//
// },4000)
// button.onclick = () =>{
//     picker.pickerVisible ? picker.hidePicker() : picker.showPicker(button);
// }
//


function App() {
return(
  <AppContainer >
        <HeaderContainer />
    <MainContainer/>
   </AppContainer>
)
}

export default App;




