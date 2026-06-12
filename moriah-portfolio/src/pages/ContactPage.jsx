import { useState } from 'react';
import cornerTopLeft from '../assets/services/corner-tl.svg';
import cornerTopRight from '../assets/services/corner-tr.svg';
import cornerBottomLeft from '../assets/services/corner-bl.svg';
import cornerBottomRight from '../assets/services/corner-br.svg';

// Free email service: https://web3forms.com
// Each access key is tied to one email address. Get a key at web3forms.com (no account needed).
// PROD key → moriahchiang2@gmail.com
const WEB3FORMS_KEY = 'e3b72032-ece7-4c59-beba-f689ecd00423';
// TEST key → ndacya.adeline@gmail.com
// const WEB3FORMS_KEY = 'b1472dc3-0b61-42ce-a242-53e99e56d639';

export const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          message,
          subject: `Portfolio inquiry from ${name}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-intro">
        <div className="contact-intro-content">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-description">
            Have a question about my services, work I've done in the past, or just want to say hi? Reach out with your inquiry in the form below or feel free to message my email or phone number.
          </p>
        </div>
      </section>

      <section className="contact-form-wrapper">
        {status === 'success' ? (
          <div className="contact-success">
            <p>Thank you! Your message has been sent. I&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <img src={cornerTopLeft} alt="" className="services-decor decor-tl" />
            <img src={cornerTopRight} alt="" className="services-decor decor-tr" />
            <img src={cornerBottomLeft} alt="" className="services-decor decor-bl" />
            <img src={cornerBottomRight} alt="" className="services-decor decor-br" />

            <div className="contact-field-row">
              <label className="contact-field">
                <span className="sr-only">Name</span>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={status === 'loading'}
                />
              </label>

              <label className="contact-field">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'loading'}
                />
              </label>
            </div>

            <label className="contact-field contact-field--textarea">
              <span className="sr-only">Message</span>
              <textarea
                placeholder="What can I help you with?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
                disabled={status === 'loading'}
              />
            </label>

            {status === 'error' && (
              <p className="contact-error">Something went wrong. Please try again or email directly at moriahchiang2@gmail.com</p>
            )}

            <div className="contact-submit-row">
              <button type="submit" className="contact-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Send'}
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
