import React, {useContext, useEffect, useState} from 'react'
import { Image, List } from 'semantic-ui-react'
import Utils from "../../helpers/Utils";




export default  (props) => {


   return  <List celled>
        <List.Item>
            <Image avatar src='http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'/>
            <List.Content>
                <List.Header>{props.username}</List.Header>
                {props.description}
            </List.Content>
        </List.Item>

    </List>
}

