import React, {useContext, useState} from "react";
import { Message } from 'semantic-ui-react'
import {AppContext} from "../../container/AppContainer";

const MessageUi = (props) => {


    return(
        <Message info >
            <Message.Header>Was this what you wanted?</Message.Header>
            <p>Did you know it's been a while?</p>
        </Message>
    )
};

export default MessageUi