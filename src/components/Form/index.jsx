import React, { useState } from 'react'
import './style.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tick from '../../Assets/icons/tick.svg'

const Form = () => {
  const [checkbox, setCheckbox] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    textArea: "",
    // check: checkbox
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData !== '') {
      toast("Submitted Successfully");
      console.log({ ...formData, checkbox }, 'flll data')
    } else {
      toast("Fill all the fields");
    }
  }

  return (
    <>
      <div className="formContainer">
        <div className="formheadings">
          <h2>Interested and want to receive more information?</h2>
          <p>Please submit your information below, a NGStreams's representative will be in touch shortly.</p>
        </div>
        <form action={handleSubmit} className="form">
          <div className="name-email">
            <div className="name">
              <input type="text" onChange={handleChange} name='fullName' placeholder='Full Name' />
            </div>
            <div className="email">
              <input type="email" onChange={handleChange} name="email" placeholder='Email' />
            </div>
          </div>

          <div className="name-email">
            <div className="contact">
              <input type="tel" onChange={handleChange} name="phone" placeholder='Contact number(with Country Code)' />
            </div>
            <div className="company">
              <input type="text" onChange={handleChange} name="companyName" placeholder='Company Name' />
            </div>
          </div>
          <div className="textArea">
            <textarea name="textArea" onChange={handleChange} placeholder='Enter your message here'></textarea>
          </div>
          <div className="checkboxDiv">
            {checkbox === true
              ?
              <img src={tick} alt="" className='tickBox' onClick={(e) => { setCheckbox(!checkbox) }} />
              :
              <input type="checkbox" className='tickBox'  onClick={(e) => { setCheckbox(!checkbox) }} name="checkbox" />
            }
            <p>I consent to the processing of the personal data that I provide NGStreams for this activity in accordance with and as described in the Privacy Policy.</p>
          </div>
          {checkbox !== false && formData.fullName !== "" && formData.email !== "" && formData.phone !== "" && formData.textArea !== "" && formData.companyName !== "" ? <button onClick={handleSubmit} className='submitBtn' type='submit'>Submit</button> : <button className='btn' disabled={true} type='submit'>Submit</button>}
          <ToastContainer />
        </form>
      </div>
    </>
  )
}

export default Form