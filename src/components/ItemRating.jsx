import React, { useContext, useState} from 'react'
import { Rating } from 'semantic-ui-react'
import Utils from "../helpers/Utils";
import {actions, AppContext} from "../container/AppContainer";
import message from "./messages/message";

const {host} = Utils;
export default (props) => {
  const [state, dispatch] = useContext(AppContext);
  const [rating, setRating] = useState(0);
    const apiGetItems = async () => {
        try {
            let response = await fetch(host.domain + host.allItems);
            return await response.json();
        } catch (e) {
            console.log(e);
        }
    };

  const apiRatingCreate = async (data,token) =>{
        try{
            const response = await fetch(host.domain + host.ratingCreate,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'AuthToken':token
                },
                body: JSON.stringify(data)
            });
            return response.json()
        }
        catch (e) {

        }
  };
   const HandleRate = (e, { rating}) => {
       // isLogin(state);
       if (!state.authentication.login) {
           message({
               title:'Rating',
               message: 'you need to login to do that :) '
           });
       }
       setRating( rating);
        const data = {
           rating:{
               item_id:props.itemId,
               rate_amount:rating,
           }
        };
        apiRatingCreate(data, state.authentication.token).then(response =>{
            if(response.status === 'failed') message({
                title:'Review',
                message:response.msg
            })
            else {
                message({
                    title:'Rating',
                    message:response.status
                });
                apiGetItems().then(response => {
                    dispatch({ type: actions.ITEMS, items: response });
                    //console.log(state.items);
                });


            }
        })


   };
        return (
            <div>
                <Rating maxRating={5} rating={props.rating || rating} onRate={HandleRate} />
                {/*<pre>{JSON.stringify(rating, null, 2)}</pre>*/}
            </div>
        )

}