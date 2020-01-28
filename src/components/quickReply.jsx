import React, {useState} from "react";
import {Button, Input, Popup} from "semantic-ui-react";

const quickReply = () => {
    const [input, setInput] = useState;
    return(
        <Popup
            content='quick reply'
            on='click'
            pinned
            trigger={<Button primary content='comment' />}
        >
            <Popup.Header>
                {input}
                Write a quick comment
            </Popup.Header>
            <Popup.Content>
                <Input
                    icon='tags'
                    iconPosition='left'
                    label={{ tag: true, content: 'comment' }}
                    labelPosition='right'
                    placeholder='Enter tags'
                />
            </Popup.Content>
        </Popup>
    )
};