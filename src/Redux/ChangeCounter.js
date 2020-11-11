import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import './ChangeCounter.css'
import ChangeCounter3 from './ChangeCounter3'

const ChangeCounter = (props) => {

        // const counter = useSelector( props => props.counter )
        // const dispatch = useDispatch()
        // const addCounter = () => dispatch({ type: 'ADD' })
        // const decCounter = () => dispatch({ type: 'DEC' })
        // const addTenCounter = () => dispatch({ type: 'ADDTEN' })
        // const decTenCounter = () => dispatch({ type: 'DECTEN' })

        return (

            <header className='header'>
                
                <div className='boxcounter'>

                    <div><h1>Счетчик {props.counter}</h1></div>
                    <div className='actions'>

                        <div className=''>
                            <button 
                            className='btn-green'
                            onClick={props.addCounter}>Увеличить на 1</button>
                            <button
                            className='btn-red'
                            onClick={props.decCounter}>Уменьшить на 1</button>
                        </div>

                        <div>
                            <button
                            className='btn-green'
                            onClick={props.addTenCounter}>Увеличить на 10</button>
                            <button
                            className='btn-red'
                            onClick={props.decTenCounter}>Уменьшить на 10</button>
                        </div>
                    
                    </div>

                    <ChangeCounter3 />
    
                </div>

            </header>


        )

}

function mapStateToProps(state) {
    return {
        counter: state.ReducerTwo.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCounter: () => dispatch({  type: 'ADD' }),
        decCounter: () => dispatch({ type: 'DEC' }),
        addTenCounter: () => dispatch({ type: 'ADDTEN' }),
        decTenCounter: () => dispatch({ type: 'DECTEN' })
    }
}

const ConnectionTwo = connect(mapStateToProps, mapDispatchToProps)(ChangeCounter)

export default ConnectionTwo;