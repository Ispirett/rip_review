import React, {useEffect, useState} from "react";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const Message = (props) => {
    const [open, setOpen] = useState(false);
    function openControl(props) {
         setOpen(true);
        setTimeout(()=>{
            setOpen(false)
        },props.time)
    }
    useEffect(()=>{
        openControl(props);
    },[])

    return <Modal
        open={props.open}
        // trigger={<Button>Basic Modal</Button>}
        basic size='small'>
        <Header icon='user' content='Archive Old Messages' />
        <Modal.Content>
            <p>
              Your logged in
            </p>
        </Modal.Content>
        <Modal.Actions>
            <Button basic color='red' inverted>
                <Icon name='remove' /> No
            </Button>
            <Button color='green' inverted>
                <Icon name='checkmark' /> Yes
            </Button>
        </Modal.Actions>
    </Modal>
}

export default Message