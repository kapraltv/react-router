import { combineReducers } from 'redux'
import ReducerOne from './ReducerOne'
import ReducerTwo from './ReducerTwo'
import ReducerThree from './ReducerThree'

export default combineReducers({
    ReducerOne, ReducerTwo, ReducerThree
})