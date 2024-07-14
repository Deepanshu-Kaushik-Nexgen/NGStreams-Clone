import React, { useState } from 'react'
import './style.scss'

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    textArea: "",
    checkbox: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(
      {
        ...formData,
        [name]: value
      }
    )
  }
  console.log(formData)
  return (
    <>
      <div className="formContainer">
        <div className="formheadings">
          <h2>Interested and want to receive more information?</h2>
          <p>Please submit your information below, a NGStreams's representative will be in touch shortly.</p>
        </div>
        <div className="form">
          <div className="name-email">
          <input type="text" onChange={handleChange} name='fullName' placeholder='Full Name' />
          <input type="email" onChange={handleChange} name="email" placeholder='Email' />
          </div>
         
          <div className="name-email">
          <input type="tel" onChange={handleChange} name="phone" placeholder='Contact number(with Country Code)' />
          <input type="text" onChange={handleChange} name="companyName" placeholder='Company Name' />
          </div>
          <div className="textArea">
          <textarea name="textArea" onChange={handleChange} placeholder='Enter your message here'></textarea>
          </div>
          <div className="checkboxDiv">
            <input type="checkbox" onChange={handleChange} name="checkBox" />
            <p>I consent to the processing of the personal data that I provide NGStreams for this activity in accordance with and as described in the Privacy Policy.</p>
          </div>
          <button onClick={handleChange} >Submit</button>
        </div>
      </div>
    </>
  )
}

export default Form