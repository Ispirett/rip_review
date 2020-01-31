export default {
    host:{
        domain: "http://localhost:3000/api",
        main:'http://localhost:3000',
        allItems: "/items",
        reviews: '/reviews',
        login:'/auth/login',
        signUp:'/auth/signup',

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