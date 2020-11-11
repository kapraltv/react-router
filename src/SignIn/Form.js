import React, { Fragment } from 'react'
import { CheckSignIn, loginInput, passwordInput } from './Context.js'
// import { Route } from 'react-router-dom';
// import Home from '../Home/Home'
// import Calculator from '../Calculator/Calculator'
// import CrossZero from '../Cross-zero/Cross-zero'
// import ListCars from '../Car/ListCars'
// import ConnectionOne from '../Redux/ChangeNameAndLastname';
// import ConnectionTwo from '../Redux/ChangeCounter'
import Password from './Password.js'
import Login from './Login.js'
import BtnAccess from './BtnAccess.js'
import Check from './Check.js'

class Form extends React.Component {

    state = {
        access: CheckSignIn.signIn,
        login: loginInput,
        password: passwordInput
    }

    render() {

        return(

            <Fragment>

                     <form className='form'>

                        <h1>Допуск к игре</h1>

                            <loginInput.Provider value={this.state.login}>

                                <Login />

                            </loginInput.Provider>

                            <passwordInput.Provider value={this.state.password}>

                                <Password />
                                
                            </passwordInput.Provider>

                            <CheckSignIn.Provider value={this.state.access}>

                                <BtnAccess onClick={ this.state.login === 'admin' && this.state.password === 1 ? this.setState({ 
                                    access: !CheckSignIn.signIn
                                }) : alert('Неверный логин или пароль!')} />

                                <Check />

                            </CheckSignIn.Provider>

                    </form>
                    
            </Fragment> 


        )

    }
} 

Form.ContextType = CheckSignIn;

export default Form