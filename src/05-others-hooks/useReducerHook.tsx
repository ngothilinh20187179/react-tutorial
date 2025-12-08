import { useReducer, useState } from "react";

// dependent state: isOpen and message
// complex update: 3 functions to update the state
// frequent changes: open/close multiple times
const UseStateProblems = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(''); 

    const handleSuccess = (msg: string) => {
        setIsOpen(true);
        setMessage(msg);
    }
    const handleError = (msg: string) => {
        setIsOpen(true);
        setMessage(msg);  
    }
    const handleClose = () => {
        setIsOpen(false);
        setMessage('');
    }
    return (
        <>
            {isOpen && <div>{message}</div>}
            <button onClick={() => handleSuccess('Operation was successful!')}>Show Success</button>
            <button onClick={() => handleError('An error occurred!')}>Show Error</button>
            <button onClick={handleClose}>Close</button>
        </>
    );

}

// useReducer solution ~ list use case: success, error, close - each combine a single state object
const initialState = {
    isOpen: false,
    message: ''
};

type Action = 
    | { type: 'SUCCESS'; payload: string }
    | { type: 'ERROR'; payload: string }
    | { type: 'CLOSE' };

const reducer = (state: typeof initialState, action: Action) => {
    switch(action.type) {
        case 'SUCCESS':
            return { isOpen: true, message: action.payload };
        case 'ERROR':
            return { isOpen: true, message: action.payload };
        case 'CLOSE':
            return { isOpen: false, message: '' };
        default:
            return state;
    }
}

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h3>Use useState to manage state</h3>
            <UseStateProblems />

            <h3>Use useReducer to manage state</h3>
            {state.isOpen && <div>{state.message}</div>}
            <button onClick={() => dispatch({ type: 'SUCCESS', payload: 'Operation was successful!' })}>Show Success</button>
            <button onClick={() => dispatch({ type: 'ERROR', payload: 'An error occurred!' })}>Show Error</button>
            <button onClick={() => dispatch({ type: 'CLOSE' })}>Close</button>
        </>
    );
}

export default UseReducerHook;