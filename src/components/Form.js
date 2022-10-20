import React, { useState } from "react";
import './Form.scss'


const ContactForm = () => {
    const FORM_ENDPOINT = ""; //where to send
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div className='submitted-message'>
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </div>
        );
    }

    return (
        <form
            className='form'
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <h2 className='form-title'>Contact U$ !!</h2>
            <input type="text" placeholder="Your Name" name="name" required className='form-input' />
            <input type="email" placeholder="Email" name="email" required className='form-input' />
            <textarea placeholder="Your message" name="message" required className='form-textarea' />
            <button type="submit" className='form-button'> Send a message </button>
        </form>
    );
};

export default ContactForm;
