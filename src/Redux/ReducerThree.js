const initialState = {
    counter3: 100
}

export default function ReducerThree(state = initialState, action) {

    if (action.type === 'ADD3') {
        return {
            counter3: state.counter3 + 1
        }
    } else if (action.type === 'DEC3') {
        return {
            counter3: state.counter3 - 1
        }
    } else if (action.type === 'ADDTEN3') {
        return {
            counter3: state.counter3 + 10
        }
    } else if (action.type === 'DECTEN3') {
        return {
            counter3: state.counter3 - 10
        }
     } else return state

}