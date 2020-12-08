import { useState } from 'react'

function useToggle(init = false){
  const [state, setState] = useState(init)
  const toggle = () => {setState(!state)}
return [state, toggle] 
}
function testExp(){
  console.log('explicit export is a best practice but next.js requires default export. Pros and cons to both')
}

export { useToggle, testExp }