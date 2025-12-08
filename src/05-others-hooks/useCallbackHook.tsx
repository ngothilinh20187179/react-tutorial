import { useState } from 'react';

// 🚩 Unnecessary Re-renders
// LogButton re-renders and log every time ParentComponent re-renders
// handleClick is re-created on every ParentComponent render

const LogButton = (onClick: any) => {
  console.log('LogButton rendered');
  return <button onClick={onClick}>Log Message</button>;
};

const ComponentWithoutUseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button> {/* triggers re-render */}
      <LogButton onClick={handleClick} />
    </div>
  );
}

// ✅ Optimized with useCallback
import { useCallback } from 'react';
const ComponentWithUseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []); // use dependency for props change

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <LogButton onClick={handleClick} />
    </div>
  );
}
export { ComponentWithoutUseCallback, ComponentWithUseCallback };