export default {
    host:{
        domain: "https://reviewtt.herokuapp.com/api",
        main:'https://reviewtt.herokuapp.com',
        allItems: "/items",
        reviews: '/reviews',
        login:'/auth/login',
        signUp:'/auth/signup',
        itemCreate: '/items'

    },
    tokenStore: (() =>{
        const store = (token) =>{
            return localStorage.setItem('token', token || '' )
        }
        const get =  ()=>{
            if(localStorage.getItem('token') === null) return false;
            else{
               return  localStorage.getItem('token')
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