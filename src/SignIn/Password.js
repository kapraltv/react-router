import React from 'react'
import { passwordInput } from './Context'
import '../Home/Home.css'

function Password(props) {

    return (

        <passwordInput.Consumer>

            <input 
            className='input-password' 
            type='password' 
            placeholder='Введите пароль'
            onChange={psw => psw.target.value} 
            />

        </passwordInput.Consumer>

    )

}

export default Password;