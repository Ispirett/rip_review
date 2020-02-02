import React, {useContext} from "react";
import {Button,Popup,Form,Input,Icon, Responsive} from "semantic-ui-react";
import '../css/main.css'
import NavSearch from "../components/NavSearch";
import Authentication from "../components/Authentication";
import ItemForm from "../components/ItemForm";
import MobileMenu from "../components/MobileMenu";
const Nav = () => (
    <nav id={'nav'}>
        <div id={'search'}>
            <NavSearch/>
        </div>
        <ul className={'nav-ul'}>
            <li>Home</li>
            <li >About</li>
            <li><ItemForm/></li>
            <li>
                {/*Authentication*/}
                <Authentication/>



            </li>
        </ul>
    </nav>
)



export default () =>(
    <header id={'header'}>
        <Responsive as={Nav} {...Responsive.onlyComputer}>
            <Nav/>
        </Responsive>
        <Responsive as={MobileMenu} maxWidth={1000}>
            <MobileMenu/>
        </Responsive>
        <section className={'hero'}>
            <h1>Ultimate Review Platform</h1>
            <p>Perpetuating Change</p>
        </section>
    </header>
)