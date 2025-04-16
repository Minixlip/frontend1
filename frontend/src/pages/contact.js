import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you’d send data to a backend eventually
    console.log('Form submitted:', formData);

    setSent(true);
    setTimeout(() => setSent(false), 3000); // message disappears after 3 sec
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-content">
      <h2 className="section-title">contact us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        />
        <button type="submit">Send</button>
        {sent && <p className="sent-message">✅ Message sent!</p>}
      </form>
    </div>
  );
}

export default Contact;
