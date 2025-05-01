import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TitleHeader from '../components/TitleHeader';
import ContactExperience from '../components/models/contact/ContactExperience';
import { mailer } from '../config/app';

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { serviceId, templateId, publicKey } = mailer;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (formRef.current) {
        const res = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

        if (res.status === 200) setIsSent(true);
      }
    } catch (error) {
      console.error('EMAILJS ERROR: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMessage = () => {
    let message = 'Send Message';

    if (isSent) {
      message = 'Message sent!';
    }

    if (!isSent && loading) {
      message = 'Sending...';
    }

    return message;
  };

  return (
    <section id='contact' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title='Get in Touch – Let’s Connect' sub='💬 Have questions or ideas? Let’s talk! 🚀' />

        <div className='mt-16 grid-12-cols'>
          {/* LEFT SIDE */}
          <div className='xl:col-span-5'>
            <div className='flex-center card-border rounded-xl py-10 px-3 md:px-5'>
              <form ref={formRef} onSubmit={handleSubmit} className='w-full flex flex-col gap-7'>
                <div>
                  <label htmlFor='name'>Your name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='What’s your good name?'
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSent}
                    required
                  />
                </div>

                <div>
                  <label htmlFor='email'>Your Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='What’s your email address?'
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSent}
                    required
                  />
                </div>

                <div>
                  <label htmlFor='message'>Your Message</label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='How can I help you?'
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSent}
                    required
                  />
                </div>

                <button type='submit' disabled={loading || isSent}>
                  <div className='cta-button group'>
                    <div className='bg-circle' />
                    <p className='text'>{handleMessage()}</p>
                    <div className='arrow-wrapper'>
                      <img src='/images/arrow-down.svg' alt='arrow' />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='xl:col-span-7 min-h-96'>
            <div className='w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden'>
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
