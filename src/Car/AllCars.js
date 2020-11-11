import React from 'react'
import { Link } from 'react-router-dom'
import CarAPI from './CarAPI'
import './AllcarsStyle.css'

const AllCars = () => (

    <div>
        <div><h1>Список машин</h1></div>
        
            <ul className='ul-allcars'>
            {
                CarAPI.all().map(car => (
                <li className='li-allcars' key={car.id}>
                    <Link style={{textDecoration: 'none', color: 'blue'}} to={`/cars/${car.id}`}>Авто марки: {car.name}</Link>
                </li>
                ))
            }
            </ul>
  </div>

)

export default AllCars;
   

