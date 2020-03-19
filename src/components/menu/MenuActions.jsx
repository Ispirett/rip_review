import {Icon, Label, Menu, Popup} from "semantic-ui-react";
import HelpModal from "../help/HelpModal";
import React, {useContext, useEffect, useState} from "react";
import NotificationList from "./NoitficationList";
import {AppContext} from "../../container/AppContainer";
import Utils from "../../helpers/Utils";
const {host} = Utils

const apiGetNotification = async (token) =>{
    try {
        const response = await fetch(host.domain + host.notification, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "AuthToken": token
            }
        });
        return response.json();
    } catch (e) {
        console.log(e);
    }
};
export default  () => {
    const [state] = useContext(AppContext);
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
        // show notification if logged in.
         if(Utils.isLoggedIn(state)) {
             apiGetNotification(state.authentication.token).then(response => {
                 // TODO  need to add refresh token for authentication.
                 if(response.status !== 'failed') setNotifications(response);
             })
         }
    }, []);
    return <Menu compact>
        <Popup trigger={
            <Menu.Item as='a'>
                <Icon name='bell'/> Notifications
                <Label color='teal' floating>
                    {notifications.length}
                </Label>
            </Menu.Item>
        }
               on='click'
               pinned
               position='bottom center'

        >
            <Popup.Header>Notifications </Popup.Header>
            <Popup.Content>
                {
                  notifications.map((notification, index)=>{
                    return <NotificationList
                          key={index}
                          username={notification.notification_from_username}
                          description={notification.action}
                      />
                  })
                }

            </Popup.Content>
        </Popup>


        <HelpModal trigger={
            <Menu.Item as='a'>
                <Icon name='help'/> Help
                {/*<Label color='red' flo   ating>*/}
                {/*    22*/}
                {/*</Label>*/}
            </Menu.Item>
        }/>

    </Menu>
}

