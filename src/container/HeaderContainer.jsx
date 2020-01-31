import React, {useContext} from "react";
import {Button,Popup,Form,Input,Icon} from "semantic-ui-react";
import '../css/main.css'
import NavSearch from "../components/NavSearch";
import Authentication from "../components/Authentication";



export default () =>(
    <header id={'header'}>
        <nav id={'nav'}>
        <div id={'search'}>
           <NavSearch/>
        </div>
          <ul className={'nav-ul'}>
              <li>Home</li>
              <li >About</li>
            <li>
                {/*Authentication*/}
                <Authentication/>



            </li>
          </ul>
        </nav>

        <section className={'hero'}>
            <h1>Ultimate Review Platform</h1>
            <p>Perpetuating Change</p>
        </section>
    </header>
)