import React from 'react'
import { loginInput } from './Context'
import '../Home/Home.css'

function Login(props) {

    return (

        <loginInput.Consumer>

            {  () => ( <input 
                className='input-login' 
                type='text' 
                placeholder='Введите логин' 
                onChange={login => login.target.value} 
             /> ) }

        </loginInput.Consumer>

    )  
 
}

export default Login;