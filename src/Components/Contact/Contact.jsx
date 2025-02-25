import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import  mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below.
             Your feedback, questions and suggestions are import to us as we strive to provide exceptional
             service to our university community.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />email</li>
                <li><img src={phone_icon} alt="" />Phone number</li>
                <li><img src={location_icon} alt="" />Address</li>
            </ul>
        </div>
        <div className="contact-col">
            <form action="">
                <label htmlFor="">Your name: </label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label htmlFor="">Your phone number: </label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label htmlFor="">Write your messages here: </label>
                <textarea name="message"  rows="" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Subit now<img src={white_arrow} alt=''/></button>
            </form>
            <span>sending</span>
        </div>
      
    </div>
  )
}

export default Contact
