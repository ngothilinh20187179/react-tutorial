// DemoPage.tsx
import React from 'react';
import { useStateValue } from '../context/stateContext';
import { actions } from '../context/stateReducer';

const DemoPage: React.FC = () => {
    const { state, dispatch } = useStateValue();
    const { user } = state;

    const handleLogin = () => {
        dispatch({
            type: actions.SET_USER,
            payload: { id: '123', name: 'John Doe' }
        });
    };

    return (
        <div>
            <h2>🛒 Demo State Management</h2>
            <p><strong>User:</strong> {user ? user.name : 'Guest'}</p>
            <button onClick={handleLogin} disabled={!!user}>
                {user ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default DemoPage;