import React from 'react'
import { useState } from 'react'

function AdressGen() {
    let nameof = "click"
    let [name, setName] = useState(nameof)
    const getName = () => {
        let Fakerator = require("fakerator");
        let fakerator = Fakerator("de-DE");
        let nameof = fakerator.names.name();
        setName(name = nameof)
    }
    return (
        <div className='Countercomp'>
            <h2 className='heading'>Click The Button To Generate A Name</h2>
            <button onClick={getName}>Generate Name</button>
            <h4>{name}</h4>
        </div>
    )
}

export default AdressGen
