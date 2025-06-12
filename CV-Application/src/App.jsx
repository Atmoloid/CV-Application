import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'

function App() {
  const [form, setForm] = useState(0)

  return (
    <>
    <div id="form-container">
    <div className='form'>
      <h1>Name</h1>
      <input type='text' placeholder='Enter your name' />

        <h1>Surname</h1>
        <input type='text' placeholder='Enter your surname' />

        <h1>Email</h1>
        <input type='email' placeholder='Enter your email' />

        <h1>Phone Number</h1>
        <input type='tel' placeholder='Enter your phone number' />

        <h1>Address</h1>
        <input type='text' placeholder='Enter your address' />

        <h1>Work Experience</h1>
        <input type='text' placeholder='Enter your work experience' />

        <h1>Education</h1>
        <input type='text' placeholder='Enter your education' />

        <br />
        <button type='submit'>Submit</button>
       </div>
   
       <div className='form' id='second-form'>
      <h1>Name</h1>
      <input type='text'  readOnly/>

        <h1>Surname</h1>
        <input type='text'  readOnly />

        <h1>Email</h1>
        <input type='email'  readOnly/>

        <h1>Phone Number</h1>
        <input type='tel'  readOnly/>

        <h1>Address</h1>
        <input type='text'  readOnly/>

        <h1>Work Experience</h1>
        <input type='text'  readOnly/>

        <h1>Education</h1>
        <input type='text' readOnly/>

        <br />
      </div>
      </div>

       </> 
  )
}

export default App
