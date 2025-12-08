
| Hooks | Applications |
| :--- | :--- |
| useState | State Management |
| useRef | Mutables, DOM references |
| useEffect | Side Effects, Data Fetching |
| useReducer | Complex state management |
| useContext | Global Data Sharing |
| useCallback | Function Memoization |
| useMemo | Value Memoization, Preventing Expensive Calculations |

## useState vs useRef

| useState | useRef |
| :--- | :--- |
| Manage State that affects the UI | Store a Mutable Value that persists across renders |
| Triggers a re-render when the value is updated | Does NOT trigger a re-render |
| Direct value access | Value is accessed via the .current property |
| User input, toggles, dynamic data, anything visible. | DOM references, interval IDs, mutable objects, storing previous state. |

## useReducer vs useState

"what is the new state value?" (useState) vs "what just happened?" (useReducer).

| useState | useReducer |
| :--- | :--- |
| The state is simple, independent | The state is complex, dependent |
| Infrequent updates. | Frequent/ related updates. |

useReducer
- Initial State and Action Types
- Defining the Reducer Function
- Dispatching Actions to Update State

## useEffect

- Setting up / Removing the listener, timer
- Calling Third-Party Libraries
- Data Fetching
- Manually Changing the DOM
- Dependency
+ No array - Runs after every render
+ Empty array ([]) - Runs only once after the initial mount of the component
+ Array with variables - Runs after the initial mount and any time one of the values in the array changes

## useContext
- Solve Problems: Prop Drilling
- Global State Management - nested components to access data directly - without manually passing props
- 3 steps: Create the Context, Provide the data, and Consume the data.
- Combining with useReducer to create a lightweight, Redux-like global state management system

## useCallback vs useMemo
-> Performance optimization
- useContext -> Unnecessary Re-renders -> use useCallback
- Expensive Calculation Running Unnecessarily -> useMemo