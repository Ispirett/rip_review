import React from 'react'
import {  Header,  Modal } from 'semantic-ui-react'
import HelpInformation from "./HelpInformation";

const HelpModal = (props) => (
    <Modal trigger={props.trigger}>
        <Modal.Header>Help!</Modal.Header>
        <Modal.Content >
            <Modal.Description>
                <Header>How to use this app!.</Header>
                <HelpInformation/>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default HelpModal