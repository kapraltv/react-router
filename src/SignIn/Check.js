import React from 'react'
import { Route } from 'react-router-dom';
import Home from '../Home/Home'
import Calculator from '../Calculator/Calculator'
import CrossZero from '../Cross-zero/Cross-zero'
import ListCars from '../Car/ListCars'
import ConnectionOne from '../Redux/ChangeNameAndLastname';
import ConnectionTwo from '../Redux/ChangeCounter'
import { CheckSignIn } from '../SignIn/Context.js'

const Check = (props) => {

    return (

        <CheckSignIn.Consumer>

            {  CheckSignIn.signIn 
            ? 
            <Route 
            exact
            path='/' 
            component={Home}/> &&
            <Route 
            path='/cross-zero' 
            component={CrossZero}/> &&
            <Route 
            path='/calculator' 
            component={Calculator}/> &&
            <Route 
            path='/cars' 
            component={ListCars}/> &&
            <Route 
            path='/changename' 
            component={ConnectionOne}/> &&
            <Route 
            path='/changecounter' 
            component={ConnectionTwo}/> 
            : 
            <Route 
            path='/' 
            component={Home}/> }

        </CheckSignIn.Consumer>

    )
}

export default Check;
