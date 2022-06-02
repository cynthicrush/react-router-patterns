import React, { useState } from "react";
import { useHistory } from 'react-router-dom'


function Form({addColor}) {
    const [form, updateForm] = useState({name:'', hex:'#ffffff'})
    const history = useHistory()

    function handleChange(e) {
        e.persist()
        updateForm(f => ({...f, [e.target.name]: e.target.value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addColor({ [form.name]: form.hex })
        history.push('/colors')
    }

    const {hex, name} = form

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color Name</label>
                <input name='name' id='name' onChange={handleChange} value={name} />
                <label htmlFor="hex">Color Value</label>
                <input name='hex' id='hex' type='color' onChange={handleChange} value={hex} />
                <input type='Submit' value='Add color' readOnly />
            </form>
        </div>
    )
}

export default Form