// Without using custom hooks
import { useCallback, useState } from 'react';

export function TogglerComponentWithoutCustomHook() {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
        setIsVisible(prevIsVisible => !prevIsVisible);
    };

    return (
        <div>
            <h3>Standard useState Example</h3>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide Message' : 'Show Message'}
            </button>
        </div>
    );
}

// Using a custom hook
function useToggle(initialValue = false): [boolean, () => void] {
    const [value, setValue] = useState(initialValue);

    const toggle = useCallback(() => {
        setValue(currentValue => !currentValue);
    }, []);

    return [value, toggle]; // tuple
}
export function TogglerComponentWithCustomHook() {
    const [isVisible, toggleVisibility] = useToggle(true);

    return (
        <div>
            <h3>Custom useToggle Hook Example</h3>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide Message' : 'Show Message'}
            </button>
        </div>
    );
}