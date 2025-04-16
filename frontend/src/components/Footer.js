import React from 'react';
import './Footer.css'; // Optional if you want to keep footer-specific styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 kyyl9. all rights reserved.</p>

        <div className="footer-contact-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;

              console.log('Form submitted:', { name, email, message });
              alert('Thank you for reaching out!');
              e.target.reset();
            }}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
