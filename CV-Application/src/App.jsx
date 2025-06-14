import { useState } from 'react'
import './App.css'

function App() {
  const [isSubmitted, setSubmission] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    workExperience: '',
    education: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    setSubmission(true)
  }

  return (
    <>
    <div id="form-container">
       
       <div className='form'>
          <h1>Name</h1>
          <input type='text' name='name' placeholder='Enter your name' onChange={handleChange} />

          <h1>Surname</h1>
          <input type='text' name='surname' placeholder='Enter your surname' onChange={handleChange} />

          <h1>Email</h1>
          <input type='email' name='email' placeholder='Enter your email' onChange={handleChange} />

          <h1>Phone Number</h1>
          <input type='tel' name='phone' placeholder='Enter your phone number' onChange={handleChange} />

          <h1>Address</h1>
          <input type='text' name='address' placeholder='Enter your address' onChange={handleChange} />

          <h1>Work Experience</h1>
          <input type='text' name='workExperience' placeholder='Enter your work experience' onChange={handleChange} />

          <h1>Education</h1>
          <input type='text' name='education' placeholder='Enter your education' onChange={handleChange} />

          <br />
          <button className='submit' type='submit' onClick={handleSubmit}>Submit</button>
        </div>

        
        <div className='form' id='second-form'>
          <h1>Name</h1>
          <input type='text' readOnly value={isSubmitted ? formData.name : ''} />

          <h1>Surname</h1>
          <input type='text' readOnly value={isSubmitted ? formData.surname : ''} />

          <h1>Email</h1>
          <input type='email' readOnly value={isSubmitted ? formData.email : ''} />

          <h1>Phone Number</h1>
          <input type='tel' readOnly value={isSubmitted ? formData.phone : ''} />

          <h1>Address</h1>
          <input type='text' readOnly value={isSubmitted ? formData.address : ''} />

          <h1>Work Experience</h1>
          <input type='text' readOnly value={isSubmitted ? formData.workExperience : ''} />

          <h1>Education</h1>
          <input type='text' readOnly value={isSubmitted ? formData.education : ''} />

          <br />
        </div>
      </div>
       </> 
  )
   
}

export default App