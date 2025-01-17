import ReactGA from "react-ga";
export default {
    host:{
        domain: "https://reviewtt.herokuapp.com/api",
        main:'https://reviewtt.herokuapp.com',
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

        };
        // const getRefreshToken = (storeLocal) =>{
        //
        // };
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