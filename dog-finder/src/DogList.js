import React from 'react'
import { Link } from 'react-router-dom'

function DogList({dogs}) {
    return (
        <div className='DogList'>
            <h1>Check our dogs!</h1>
            <div className='dogs'>
                {dogs.map(d => (
                    <div key={d.name}>
                        <div><Link to={`/dogs/${d.name}`}>{d.name}</Link></div>
                        <img src={d.src} alt={d.name} /> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;