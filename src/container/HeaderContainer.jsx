import React from "react";
import {Responsive} from "semantic-ui-react";
import '../css/main.css'
import NavSearch from "../components/menu/NavSearch";
import Authentication from "../components/Authentication";
import ItemForm from "../components/item/ItemForm";
import MobileMenu from "../components/menu/MobileMenu";
import MenuActions from "../components/menu/MenuActions";

const Nav = () => (
    <nav id={'nav'}>
        <div id={'search'}>
            <NavSearch/>
        </div>
        <ul className={'nav-ul'}>
            <li><MenuActions/></li>
            <li><ItemForm/></li>
            <li>
                {/*Authentication*/}
                <Authentication/>
            </li>
        </ul>
    </nav>
);



export default () =>(
    <header id={'header'}>
        <Responsive as={Nav} {...Responsive.onlyComputer}>
            <Nav/>
        </Responsive>
        <Responsive as={MobileMenu} maxWidth={1000}>
            <MobileMenu/>
        </Responsive>
        <section className={'hero'}>
             <h1>Rip Review</h1>
            <p>Perpetuating Change</p>
            <p>review whatever you want!</p>
        </section>
    </header>
)

