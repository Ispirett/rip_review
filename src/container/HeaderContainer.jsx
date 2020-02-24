import React from "react";
import {Icon, Responsive, Label, Menu} from "semantic-ui-react";
import '../css/main.css'
import NavSearch from "../components/NavSearch";
import Authentication from "../components/Authentication";
import ItemForm from "../components/ItemForm";
import MobileMenu from "../components/MobileMenu";
import HelpModal from "../components/help/HelpModal";
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

const MenuActions = () => (
    <Menu compact>
        <Menu.Item as='a'>
            <Icon name='bell' /> Notifications
            <Label color='teal' floating>
                22
            </Label>
        </Menu.Item>

        <HelpModal trigger={
            <Menu.Item as='a'>
                <Icon name='help' /> Help
                {/*<Label color='red' flo   ating>*/}
                {/*    22*/}
                {/*</Label>*/}
            </Menu.Item>
        }/>

    </Menu>
)

