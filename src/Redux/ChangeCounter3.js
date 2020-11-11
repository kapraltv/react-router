import React from 'react'
import { connect } from 'react-redux'
import './ChangeCounter.css'

class ChangeCounter extends React.Component {

    render() {

        return (

            <header className='header'>
                    
                <div className='boxcounter'>

                    <div><h1>Счетчик <strong>{this.props.counter}</strong></h1></div>
        
                    <div className='actions'>

                        <div className=''>
                            <button 
                            className='btn-green'
                            onClick={this.props.addCounter}>Увеличить на 1</button>
                            <button
                            className='btn-red'
                            onClick={this.props.decCounter}>Уменьшить на 1</button>
                        </div>

                        <div>
                            <button
                            className='btn-green'
                            onClick={this.props.addTenCounter}>Увеличить на 10</button>
                            <button
                            className='btn-red'
                            onClick={this.props.decTenCounter}>Уменьшить на 10</button>
                        </div>
                    
                    </div>

                </div>

            </header>
            
        )

    }

}

function mapStateToProps(state) {
    return {
        counter: state.ReducerThree.counter3
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCounter: () => dispatch({  type: 'ADD3' }),
        decCounter: () => dispatch({ type: 'DEC3' }),
        addTenCounter: () => dispatch({ type: 'ADDTEN3' }),
        decTenCounter: () => dispatch({ type: 'DECTEN3' })
    }
}

const ConnectionThree = connect(mapStateToProps, mapDispatchToProps)(ChangeCounter)

export default ConnectionThree;