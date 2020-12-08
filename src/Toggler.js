import { useToggle, testExp } from './hooks/useToggle'

export default function Toggler(){
  
  const [isHappy, toggleIsHappy] = useToggle(true)

  return(
    <div>
      <h1>Custom Hooks: click to toggle</h1>
      <h1 onClick={toggleIsHappy}>{isHappy ? ':)':':('}</h1>
      {testExp()}
    </div>
  )
}