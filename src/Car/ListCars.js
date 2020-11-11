import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllCars from './AllCars'
import Car from './Car'

const ListCars = () => {

        return (
            <Switch>
            <Route exact path='/cars' component={AllCars} />
            <Route path='/cars/:id' component={Car} />
            </Switch>
        )

  }

export default ListCars;
