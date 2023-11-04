import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const refForm = useRef();

    const handleEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_anh3xnk',
            'template_26z1u7p',
            refForm.current,
            '1wqsMPnvjIL6kWi-Q'
        ).then (() => {
            alert('Message succesfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again')
        })

    }

    return (
    <div className="container contact-page">
        <div className="contact-form">
        <p>
        I'm actively looking for internship opportunities in software development.
        If you have any openings or would like to discuss potential opportunities,
        please don't hesitate to contact me using the form below.
        </p>
            <form ref={refForm} onSubmit={handleEmail}>
              <ul>
                <li className='name'>
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className='email'>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="send-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
    );
}

export default Contact;