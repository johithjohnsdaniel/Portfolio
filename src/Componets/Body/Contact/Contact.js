
import './Contact.css'
import Div from '../../Common/Div'
import {useState} from 'react'
import emailjs from 'emailjs-com';

function Contact() {
    const [Results, setResults] = useState(false);

    const Result =()=>{
        return(
            <p className='result'>successfully Sent . Contact You Soon ! </p>
        )
    }

    const sendEmail =(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('service_kozkyln', 'template_l827s4p', e.target, 'user_PLJqAUvNV5SnfBWg1zrQt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
          setResults(true)
      }
    return (
        <div className='contact-body'>
            <Div />

            <div className="contact-title">Contact Me</div>
            <div className="contact-main">

            <form className="contact-form" onSubmit={sendEmail}>

                <div className="left-contact">

                    <input  className='contact-input' type="hidden" name="contact_number"  required/>
                    <label>Name</label>
                    <input className='contact-input' type="text" name="user_name" required />
                    <label>Email</label>
                    <input  className='contact-input' type="email" name="user_email" required />
                    <label>Message</label>
                    <textarea className='contact-input'  name="message" required />

                </div>
                    <div className="right-contact">
                    <input className='btn-input' type="submit" value="Send" />
                    </div>
                  
            </form>
            <div className="result">{Results  && <Result /> }</div>

           </div>
        </div>
    )
}

export default Contact
