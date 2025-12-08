import { useRef, useState, useEffect } from 'react';

const UseRefHook = () => {
    // useState -> re-render the component when state changes
    const [name, setName] = useState('');
    useEffect(() => {
        alert('Render');
    });

    // Case 1: useRef to reference a DOM element
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // Case 2: useRef to keep mutable value which does not cause re-render when changed
    const count = useRef(0);
    const [, setDummyState] = useState(0);
    const handleRefChangeOnly = () => {
        const newValue = count.current + 1;
        count.current = newValue;
        console.log(`count = ${newValue}.`);
    };
    const handleUpdateCount = () => {
        setDummyState(prev => prev + 1);
    }


    return (
        <>
            <div>
                <h3>Use useState - re-render</h3>
                <input
                    ref={inputRef}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div>
                <h3>Use useRef to reference a DOM element</h3>
                <button onClick={handleFocus}>
                    Focus Input
                </button>
            </div>

            <div>
                <h3>Use useRef - No re-render on ref change</h3>
                <button onClick={handleRefChangeOnly}>
                    Count ++
                </button>
                <p> count = {count.current} </p>
                <p> {`click ++, 'count' changed, but no re-render -> still show count = 0 `} </p>
                <p>Click Update count to see 'count' value</p>
                <button onClick={handleUpdateCount}>Update count</button>
            </div>
        </>
    );
};

export default UseRefHook;