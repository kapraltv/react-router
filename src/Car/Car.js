import React from 'react'
import { Link } from 'react-router-dom'
import CarAPI from './CarAPI'

const Car = props => {

    const car = CarAPI.get(
        parseInt(props.match.params.id, 10))

    if (!car) {
        return <div>Такой машины нет!</div>
    }

    return (
        <div>
            <h1>{car.name} (#{car.id})</h1>
            <h2>Carbody: {car.carbody}</h2>
            <Link to='/cars'>Back</Link>
        </div>
    )
}

export default Car;