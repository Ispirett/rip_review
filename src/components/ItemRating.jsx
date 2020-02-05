import React, {Component, useContext, useReducer, useState} from 'react'
import { Rating } from 'semantic-ui-react'
import Utils from "./Utils";
import {actions, AppContext} from "../container/AppContainer";
const {host} = Utils
export default (props) => {

  const [state, dispatch] = useContext(AppContext)
  const [rating, setRating] = useState();
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
   const handleRate = (e, { rating}) => {
       setRating( rating);
        const data = {
           rating:{
               item_id:props.itemId,
               rate_amount:rating,
           }
        };
        apiRatingCreate(data, state.authentication.token).then(response =>{
            if(response.status === 'failed') alert(response.msg);
            else {
                apiGetItems().then(response => {
                    dispatch({ type: actions.ITEMS, items: response });
                    //console.log(state.items);
                });
                alert(response.status)

            }
        })


   };
        return (
            <div>
                <Rating maxRating={5} rating={props.rating || rating} onRate={handleRate} />
                {/*<pre>{JSON.stringify(rating, null, 2)}</pre>*/}
            </div>
        )

}