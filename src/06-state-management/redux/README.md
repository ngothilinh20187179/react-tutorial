# Global State Management - Redux

## 📦 Installation
To effectively use Redux in a modern React application, you need to install and understand three main components: Redux Toolkit, React-Redux, and the underlying Redux library.

```bash
    npm install @reduxjs/toolkit react-redux
    # OR
    yarn add @reduxjs/toolkit react-redux
```

## Redux Architecture Overview
### The Store (Single Source of Truth)
- Holds the application state.

- Creation: Create the Redux store using the `configureStore()` (@reduxjs/toolkit)

- State Access: 
+ `store.getState()` (redux core): Read the state only at the time of the call, Always return the entire state tree, No re-rendering
+  `useSelector()` (react-redux): Read the state and Subscription (re-render - state change)

-> `useSelector()` - React Components
-> `store.getState()` - handle logic before sending an Action

- State Modification:
+ `store.dispatch(action)` (redux core): Submit an Action, Anywhere with direct access to the Store audience
+ `useDispatch()` (react-redux): Return the dispatch function, Inside the React Functional Component (UI)

### Actions (State is Read-Only)
- The event signals that notify the store about a change.
- Structure: Must contain a `type` field (a string) and often a `payload` field (data).
- Dispatching: Actions are sent to the store using the `dispatch()` function.

### Reducers (Changes with Pure Functions)
- Take the current state and an action as arguments, and return a new state object.
- Use `createSlice()` (@reduxjs/toolkit) to define a feature's state, reducers, and actions in a single file.
- Use `createAsyncThunk()` to define asynchronous logic, such as fetching data from an API (action types—pending, fulfilled, and rejected).
- Use `combineReducers()` to combine all the individual feature reducers/slices into a single root reducer function for the store.
