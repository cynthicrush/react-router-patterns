import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import DogList from './DogList';
import FilterDogs from './FilterDogs';

function Dogs({dogs}) {
    const links = dogs.map(d => (
        <NavLink key={d.name} to={`/dogs/${d.name}`}>
            {d.name}
        </NavLink>
    ))
    return (
        <div className='Dogs'>
            <nav>
                <NavLink exact to='/dogs'>Home</NavLink>
                {links}
            </nav>
            <Switch>
                <Route exact path='/dogs'>
                    <DogList dogs={dogs} />
                </Route>
                <Route exact path='/dogs/:name'>
                    <FilterDogs dogs={dogs} />
                </Route>
                <Redirect to='/dogs' />
            </Switch>
        </div> 
    )
}

export default Dogs;