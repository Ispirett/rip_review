import React from 'react'
import { Button, Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
    { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
    // { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
];

const CommentSettings = (props) => (
            <Dropdown
                className='icon'
                floating
                options={options}
                trigger={props.trigger}
            />
)

export default CommentSettings