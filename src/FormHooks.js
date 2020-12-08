import React, { useState } from 'react'
import formInputHook from './hooks/formInputHook'

function FormHooks(){
  const [email, setEmail] = useState('')
  const handleChange = (e) => {setEmail(e.target.value)}
  const handleSubmit=()=>{setEmail('')}
  return(
    <div>
      <h1>Forms using Hooks</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

function HookedFormHooks(){
  const [phoneNum, setPhoneNum, resetPhoneNum] = formInputHook('')
  return(
    <div>
      <h1>Hooked Form Inputs</h1>
      <form onSubmit={resetPhoneNum} htmlFor='phoneNum'>
        <label id='phone'>Phone Number</label>
        <input
          id='phone'
          name='phone'
          type='phone'
          value={phoneNum}
          onChange={setPhoneNum}
        />
      </form>
    </div>
  )

}

export { FormHooks, HookedFormHooks }