import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_iwj8hxl', 'template_2fkmu3c', form.current, 'L64en_B4Tgpn3MuII')
        .then((result) => {
            console.log(result.text);
            alert("msg sent");
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div className="container-fluid mb-3" id="contact">
        <h3 className="text-violet display-6 text-center">Contact Me!</h3>
        <div className="row d-flex justify-content-center align-items-center">
            <form className="form-wrapper" autoComplete='off' ref={form} onSubmit={sendEmail}>
                <input className="box-size form-control pb-2" name="user_name" type="text" placeholder="Name" />  <br/><br/>
                <input className="box-size form-control pb-2" type="tel" name="user_tel" placeholder="Mobile No." /><br/><br/>
                <input className="box-size form-control pb-2" type='email' name="user_email" placeholder="email"/><br/><br/>
                <textarea className='pt-2 form-control' name="message" placeholder=' write your text'/><br/><br/>
                <button className=' btn center' type="submit">Send Message</button>  
            </form>
        </div>
        </div>
    )
}
export default Contact;