import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect, Link } from 'react-router-dom'

import ColorList from "./ColorList";
import Color from "./Color";
import Form from "./Form";

function Colors() {
    const initialColors = JSON.parse(localStorage.getItem('colors')) || {
        red: '#FF0000',
        green: '#00FF00',
        blue: '#0000FF',
    }

    const [colors, updateColors] = useState(initialColors)

    useEffect(
        () => localStorage.setItem('colors', JSON.stringify(colors)), [colors]
    )

    function handleAddColor(newColorObj) {
        updateColors(prevColors => ({...prevColors, ...newColorObj}))
    }

    function renderCurrentColor(props) {
        const {color} =props.match.params
        const hex = colors[color]
        return <Color {...props} hex={hex} color={color} />
    }

    return (
        <div className="Colors">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/colors'>
                        <ColorList colors={colors}/>
                    </Route>
                    <Route exact path='/colors/new'>
                        <Form addColor={handleAddColor}/>
                    </Route>
                    <Route exact path='/colors/:color' render={renderCurrentColor}/>
                    <Redirect to='/colors' />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Colors