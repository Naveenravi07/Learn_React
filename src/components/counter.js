import React from 'react'
import { useState } from 'react'

function Counter(props) {
    const [count, setCount] = useState(props.count)
    const addCount = () => {
        setCount(count + 1)
    }
    return (
        <div className='Countercomp'>
             <h2 className='heading'>Hai I Am A Counter</h2>
            <h3>{count}</h3>
            <button onClick={addCount}>Click Here</button>
        </div>
    )
}

export default Counter