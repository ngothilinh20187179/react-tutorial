import { useState, useEffect } from 'react';

const LifecycleDemo = () => {
    // 1. State Initialization
    const [isVisible, setIsVisible] = useState(true); 
    const [count, setCount] = useState(0);

    useEffect(() => {
        // 3. Mounting Complete (Mounted)
        console.log('✅ MOUNTED: Component has been attached to the DOM!');
        return () => {
            console.log('❌ UNMOUNTING');
        };
    }, []);

    useEffect(() => {
        // 4. Mounting Complete (Mounted)
        // 6. Updating Complete (Updated)
        console.log(`🔄 UPDATING Count: ${count}.`);
    }, [count]);

    // 2. Render (Create Virtual DOM) -> mount to Real DOM
    return ( 
        <div>
            <h1>Demo Component Lifecycle</h1>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Remove Component' : 'Attach Component'}
            </button>
            {isVisible &&
                <>
                    <p>Count: {count}</p>
                    {/* 5. State Change, Re-render, DOM Update */}
                    <button onClick={() => setCount(count + 1)}> 
                        Count ++
                    </button>
                </>
            }
        </div>
    );
}
export default LifecycleDemo