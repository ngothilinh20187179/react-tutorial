// action type, initial state, function reducer

export type State = {
    user: { id: string, name: string } | null;
    cart: any[];
    theme: 'light' | 'dark';
};

export const initialState: State = {
    user: null,
    cart: [],
    theme: 'light',
};

export const actions = {
    SET_USER: 'SET_USER',
    ADD_TO_CART: 'ADD_TO_CART',
    TOGGLE_THEME: 'TOGGLE_THEME',
};

type SetUserAction = { type: typeof actions.SET_USER; payload: State['user'] };
type AddToCartAction = { type: typeof actions.ADD_TO_CART; payload: any };
type ToggleThemeAction = { type: typeof actions.TOGGLE_THEME, payload: any };

export type Action = SetUserAction | AddToCartAction | ToggleThemeAction;

export const stateReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case actions.SET_USER:
            return {
                ...state,
                user: action.payload,
            };

        case actions.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        case actions.TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            };

        default:
            return state;
    }
};