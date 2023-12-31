import './index.scss';
import { useState } from 'react';


const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);

    try {
      console.log('handleEmail');
      const response = await fetch('https://portfolio-fd2u.onrender.com/api/contact', {
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
    setIsLoading(false);
    alert(data.message);


     
    } catch (error) {
      setIsLoading(false);
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
                  <button type="submit" className="send-button" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
    );
}

export default Contact;