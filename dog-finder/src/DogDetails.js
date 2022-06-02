import React from 'react'
import { Link } from 'react-router-dom'

function DogDetails({dog}) {
    return (
        <div className='DogDetails'>
            <h1>{dog.name}</h1>
            <div>Age: {dog.age} years old</div>
            <img src={dog.src} alt={dog.name} />
            <ul>
                {dog.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
            <Link to='/dogs'>Home</Link>
        </div>
    )
}

export default DogDetails;