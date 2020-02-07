import React from 'react'


    const isLogin = (state) => {
       if (!state.authentication.login) {
           return alert('you need to login to do that ')
       }

    };


export {isLogin}