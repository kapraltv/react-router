import React from 'react'
import './Home.css'
import Form from '../SignIn/Form.js'
import { CheckSignIn } from '../SignIn/Context.js'

const Home = props => {

        return (

            <div>
                
                <div>
                    <h1>Добро пожаловать на сайт!</h1>
                </div>

                {/* <CheckSignIn.Provider>
                    <Form />
                </CheckSignIn.Provider> */}

            </div>

        )
    
}

export default Home