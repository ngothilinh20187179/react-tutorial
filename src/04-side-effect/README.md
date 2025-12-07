# Lifecycle

## Mounting
- The component stage is first created and inserted into the browser's Real DOM.
- Hooks: useState, useReducer, useEffect

## Updating
- The component stage is re-rendered due to a change in state or property props.
- Hooks: useState, useEffect, useMemo, useCallback

## Unmounting
- The component is removed from the physical DOM:
+ user switches to another page  
+ render conditions change
- Hooks: useEffect

```bash
    const LifecycleDemo = () => {
        const [isVisible, setIsVisible] = useState(true); 
        const [count, setCount] = useState(0);

        useEffect(() => {
            console.log('✅ MOUNTED: Component has been attached to the DOM!');
            return () => {
                console.log('❌ UNMOUNTING');
            };
        }, []);

        useEffect(() => {
            console.log(`🔄 UPDATING Count: ${count}.`);
        }, [count]);

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
```

1. State Initialization (Mounting)
- isVisible = true
- count = 0

2. Create Virtual DOM, Mount to Real DOM (Mounting)
```bash
    <div>
        <h1>Demo Component Lifecycle</h1>
        <button>Remove Component</button>
        <p>Count: 0</p> 
        <button>Count ++</button>
    </div>
```

3. Mounting Complete (Mounted)
- Log: ✅ MOUNTED: Component has been attached to the DOM!
- Log: 🔄 UPDATING Count: 0.

4. If click button 'Count++' (Updating)
- State Change 'count = 1'
- Create Virtual DOM new, update real DOM: '<p>Count: 1 </p>' (DOM Update)
- Log: '🔄 UPDATING Count: 1' (Updating Complete)

5. If click button 'Remove Component' (Unmounting)
- State Change, Re-Render
- Before removing components from the DOM, log: ❌ UNMOUNTING
- DOM update:
```bash
    <div>
        <h1>Demo Component Lifecycle</h1>
        <button>Attach Component</button>
    </div>
```

# Data Fetching
- Fetch API: Promise Chaining, Async/Await
- Axios
- *WebSockets