
const CHANGE_FIRSTNAME = "CHANGE_FIRST_NAME";

const CHANGE_LASTNAME = "CHANGE_LAST_NAME";

const CLEAR_INPUT = 'CLEAR_INPUT';

const initialState = {
    firstName: '',
    lastName: ''
}

export default function ReducerOne (state = initialState, action) {
    if (action.type === CHANGE_FIRSTNAME) {
        return {
            ...state, firstName: action.data
        }
    } else if (action.type === CHANGE_LASTNAME) {
        return {
            ...state, lastName: action.data
        }
    } else if (action.type === CLEAR_INPUT) {
        return {
            ...state,
            firstName: action.data,
            lastName: action.data
        }
    }
    else return state
}