import { useState } from 'react';
import './form.css';

import validateEmail from '../utils/validateEmail';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')


    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email))  {
            setErrorMessage('Please provide valid email');
            return;
        }
        if (!name || !message) {
            setErrorMessage('Please populate all fields')
        }

        setName('');
        setEmail('')
        setMessage('')
        alert(`Thank you for you message, ${name}`);
    }


    return (
        <div className="container text-center">
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Message'
                />
                <button type="submit">
                    Submit
                </button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}