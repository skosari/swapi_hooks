import React, { useState } from 'react'

export default function CounterHooks(){
  const [count, setCount] = useState(0)
  const add =()=> setCount(count + 1)
  const sub =()=> setCount(count - 1)

  return(
    <div>
      <h1>React Hooks</h1>
      <span style={{display: 'flex', justifyContent: 'center'}}>
      <button onClick={add}>ADD</button>
      <h1>{count}</h1>
      <button onClick={sub}>SUBTRACT</button>
      </span>
    </div>
  )
}