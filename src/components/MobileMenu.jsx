import React, {Component, useState} from 'react'
import {Button, Icon, Input, Menu} from 'semantic-ui-react'
import Authentication from "./Authentication";
import ItemForm from "./ItemForm";
import NavSearch from "./NavSearch";
import logo from '../img/logo.png'
export default () => {
    const handleMenuSate = () =>{
       const menu = document.getElementById('mobile-menu')
        menu.classList.toggle('menu-show')
    };
        return (
            <div>
                <div id={'mobile-menu-container'}>
                    <img
                        className={'logo-image'}
                        src={logo}
                        alt='image'
                    />
                    <Button animated onClick={() => handleMenuSate()}>
                        <Button.Content visible>
                            <Icon name='sort amount up' />
                        </Button.Content>
                        <Button.Content hidden>
                            <Icon name='sort amount down' />
                        </Button.Content>
                    </Button>
                </div>
                <MenuContainer/>
            </div>

        )
}

const MenuContainer = () => {
    const [activeItem, setActiveItem] = useState({});

    const handleItemClick = (e, {name}) => setActiveItem(name);

    return <Menu fluid vertical id={'mobile-menu'} className='menu-hide'>
        <Menu.Item>
            {/*<Input placeholder='Search...' />*/}
            <NavSearch/>
        </Menu.Item>

        <Menu.Item>
            Home
            <Menu.Menu>
                {/*<Menu.Item*/}
                {/*    name='search'*/}
                {/*    active={activeItem === 'search'}*/}
                {/*    onClick={handleItemClick}*/}
                {/*>*/}
                {/*    Search*/}
                {/*</Menu.Item>*/}
                <Menu.Item
                    name='add'
                    active={activeItem === 'add'}
                    onClick={handleItemClick}
                >
                    Add
                </Menu.Item>
                <Menu.Item
                    name='about'
                    active={activeItem === 'about'}
                    onClick={handleItemClick}
                >
                    Remove
                </Menu.Item>
            </Menu.Menu>
        </Menu.Item>

        {/*<Menu.Item*/}
        {/*    name='browse'*/}
        {/*    active={activeItem === 'browse'}*/}
        {/*    onClick={handleItemClick}*/}
        {/*>*/}
        {/*    <Icon name='grid layout' />*/}
        {/*    Browse*/}
        {/*</Menu.Item>*/}
        <Menu.Item
            name='buttons'
            active={activeItem === 'buttons'}
            onClick={handleItemClick}
        >
            <ItemForm/>
            <Authentication/>
        </Menu.Item>

    </Menu>
}