import React from "react";
import { Link } from 'react-router-dom'


function ColorList({colors}) {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
            <Link to={`/color/${colorName}`}>{colorName}</Link>
        </li>
    ))

    return (
        <div className="ColorList">
            <h1>Welcom to the color factory.</h1>
            <Link to='/colors/new'>Add a color</Link>
            <p>Select a color</p>
            <ul>{colorLinks}</ul>
        </div>
    )
}

export default ColorList