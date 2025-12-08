import { useMemo, useState } from 'react';

const calculateExpensiveValue = (num: number) => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        result += num;
    }
    return result;
};

function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(100);

    // const expensiveValue = calculateExpensiveValue(number);

    // useMemo caches the result. It only recalculates when 'number' changes.
    const expensiveValue = useMemo(() => {
        return calculateExpensiveValue(number);
      }, [number]);

    return (
        <div>
            <h3>Component Without useMemo</h3>
            <p>Count: {count}</p>
            <p>Number Input: {number}</p>
            <p>Expensive Result: {expensiveValue}</p>

            {/* without useMemo: Updates count - Triggers expensive re-calculation) */}
            {/* with useMemo: Updates count - re-calculation is skipped */}
            <button onClick={() => setCount(count + 1)}>
                Increment Count (Slow)
            </button>

            <button onClick={() => setNumber(number + 100)}>
                Change Number
            </button>
        </div>
    );
}
export default UseMemoHook;