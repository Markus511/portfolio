import './index.scss';
import { useRef, useState } from 'react';


const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleEmail = async (e) => {
    e.preventDefault();

    // Tarkista, ettei mikään kenttä ole tyhjä
    if (!formData.name || !formData.email || !formData.message) {
      alert('Kaikki kentät ovat pakollisia');
      return;
    }

    try {
      console.log('handleEmail');
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
    // Käsittele vastaus
    const data = await response.json();
    
    // Tyhjennä kentät ja näytä alertissa viesti
    setFormData({ name: '', email: '', message: '' });
    alert(data.message);
     
    } catch (error) {
      console.error('Virhe lähetyksessä:', error);
    }
  };
    

    return (
    <div className="container contact-page">
        <div className="contact-form">
        <p>
        If you have any internship opportunities, please send me an email using the form below.
        </p>
            <form onSubmit={handleEmail}>
              <ul>
                <li className='name'>
                <input
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
                </li>
                <li className='email'>
                <input
        type="email"
        placeholder="Your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
                </li>
              
                <li>
                <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
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