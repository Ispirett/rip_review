import ReactGA from "react-ga";
export default {
    host:{
        domain: "http://localhost:4000/api",
        main:'http://localhost:4000',
        allItems: "/items",
        reviews: '/reviews',
        login:'/auth/login',
        signUp:'/auth/signup',
        itemCreate: '/items',
        ratingCreate:'/ratings',
        topRated: '/top_rated',
        notification: '/notifications'

    },
    tokenStore: (() =>{
        const store = (token) =>{
            return localStorage.setItem('token', token || '' )
        };
        const get =  ()=>{
            if(localStorage.getItem('token') === null) return false;
            else{
                const token = localStorage.getItem('token');
                ReactGA.set({
                user_id: "username"
                });
               return  token
            }

        }
        return {
            store,
            get
        }
    })(),
    isLoggedIn: (state) =>{
        return state.authentication.login
    }

}
// product
// https://reviewtt.herokuapp.com
// http://localhost:3000