import {Icon, Label, Menu, Popup} from "semantic-ui-react";
import HelpModal from "../help/HelpModal";
import React from "react";
import NotificationList from "./NoitficationList";

export default  () => (
    <Menu compact>
        <Popup trigger={
            <Menu.Item as='a'>
                <Icon name='bell' /> Notifications
                <Label color='teal' floating>
                    22
                </Label>
            </Menu.Item>
        }
               on='click'
               pinned
               position='bottom center'

        >
            <Popup.Header>Notifications </Popup.Header>
            <Popup.Content>
                <NotificationList/>
            </Popup.Content>
        </Popup>


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

