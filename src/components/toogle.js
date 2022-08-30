import React, { useState, useEffect } from 'react'

function Toogle() {
  let [state, setCount] = useState(0)

  useEffect(() => {
    console.log("mounting" + state)
    return () => {
      console.log("unmount" + state);
    }
  }, [state])

  return (
    <div>
      <div>

        <button onClick={() => setCount(state + 1)}>Click here </button>
        <h2>{state}</h2>
      </div>
    </div>
  )
}

export default Toogle
