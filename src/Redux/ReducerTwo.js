const initialState = {
    counter: 0
}

export default function ReducerTwo(state = initialState, action) {
    
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === 'DEC') {
        return {
            counter: state.counter - 1
        }
    } else if (action.type === 'ADDTEN') {
        return {
            counter: state.counter + 10
        }
    } else if (action.type === 'DECTEN') {
        return {
            counter: state.counter - 10
        }
     } else return state

}