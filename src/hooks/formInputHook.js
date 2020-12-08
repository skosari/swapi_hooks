import { useState } from 'react'

export default init => { 
  const [input, setInput] = useState(init)
  const handleChange=(e)=>{setInput(e.target.value)}
  const handleReset=()=>setInput('')

  return [input, handleChange, handleReset]
}

