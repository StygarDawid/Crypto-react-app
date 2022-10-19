import React, { useState } from "react";
import './Form.scss'


const ContactForm = () => {
    const FORM_ENDPOINT = "";
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <h3 className='form-title'>Contact U$ !!</h3>
            <div>
                <input type="text" placeholder="Your name" name="name" required />
            </div>
            <div>
                <input type="email" placeholder="Email" name="email" required />
            </div>
            <div>
                <textarea placeholder="Your message" name="message" required />
            </div>
            <div>
                <button type="submit"> Send a message </button>
            </div>
        </form>
    );
};

export default ContactForm;
