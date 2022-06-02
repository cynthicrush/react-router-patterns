import React from "react";
import { Link } from 'react-router-dom'


function Color({hex, color, history}) {
    if(!hex) {
        history.push('/colors')
    }

    return (
        <div className="Color" style={{ backgroundColor: hex }}>
            <h1>This is {color}.</h1>
            <p>Isn't it beautiful?</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Color