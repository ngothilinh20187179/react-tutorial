// Click Event
// Input Change Event
// Form Submission Event
// Preventing Default Behavior

import { useState } from 'react';

const EventHandlingDemo = () => {

    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('No action taken yet.');

    const handleInputChange = (e: any) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        setMessage(`Input is changing: ${newValue}`);
    };

    const handleClick = () => {
        setMessage('Clicked');
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (inputValue.trim() === '') {
            setMessage('Please enter data.');
            return;
        }
        setMessage(`Form successfully submited with value: ${inputValue}`);
        setInputValue('');
    };

    return (
        <div>
            <h2>Composite Event Handling Demo</h2>
            <p> {message} </p>

            <button onClick={handleClick}>
                Click Me!
            </button>

            <form onSubmit={handleSubmit} >
                <label htmlFor="inputField" style={{ display: 'block', marginBottom: '8px' }}>
                    Enter Data and Press Submit:
                </label>
                <input
                    id="inputField"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit" >
                    Submit Form
                </button>
            </form>
        </div>
    );
};

export default EventHandlingDemo;