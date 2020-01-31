export default {
    host:{
        domain: "http://localhost:3000/api",
        main:'http://localhost:3000',
        allItems: "/items",
        reviews: '/reviews',
        login:'/auth/login',

    },
    tokenStore: (() =>{
        const store = (token) =>{
            return localStorage.setItem('token', token || '' )
        }
        const get =  ()=>{
            return localStorage.getItem('token')
        }
        return {
            store,
            get
        }
    })()

}