import React from 'react'
import { Image, List } from 'semantic-ui-react'

export default  () => (
    <List celled>
        <List.Item>
            <Image avatar src='http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png' />
            <List.Content>
                <List.Header>@tommy</List.Header>
                Created a new review!
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />
            <List.Content>
                <List.Header>@sedan</List.Header>Posted a new comment.
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/>
            <List.Content>
                <List.Header>@Ranny</List.Header>
                Rated a review!
            </List.Content>
        </List.Item>
    </List>
)

