# Global State Management
This project uses the React Context API model in conjunction with useReducer to manage application state.
Small project

## Folder Structure
```bash
    src
    ├── context                 # logic : State, Actions, Reducer.
    │   ├── stateContext.tsx    # Context, Provider, Custom Hook (useStateValue) - Bridge between State Logic and UI Components.
    │   └── stateReducer.tsx    # initialState, actions, reducer - State Logic 
    ├── pages
    ├── main.tsx                # wrap the entire App with a Provider
```

## Slicing State

Split Reducer
- Multiple Reducers Definition: create new reducer files, each managing only a slice of the global state.
- combineReducers: call each child reducer and then merge their results into a global state.

```bash
    # stateReducer.tsx -> combineReducer.tsx (root reducer)
    export type State = UserState & CartState;
    export const initialState: State = {
        ...initialUserState,
        ...initialCartState,
    };
    export const rootReducer = (state: State, action: any): State => {
        const nextUserState = userReducer({ user: state.user },
            action as any 
        );
        const nextCartState = cartReducer({ cart: state.cart },
            action as any
        );
        return {
            ...state,
            ...nextUserState,
            ...nextCartState,
        };
    };
```
```bash
    # userReducer.tsx
    export const initialUserState: UserState = {
        user: null,
    };
    export const userReducer = (state: UserState, action: UserAction): UserState => {
        switch (action.type) {
            case 'SET_USER':
                return {
                    ...state,
                    user: action.payload,
                };
            case 'LOGOUT':
                return {
                    ...state,
                    user: null,
                };
            default:
                return state;
        }
    };
```