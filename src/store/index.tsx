import { useReducer } from 'react'
import { createContainer } from 'react-tracked'

export type Theme = 'light' | 'dark'

type State = {
    theme: Theme
}

type Action = { type: 'SET_THEME'; theme: Theme }

const initialState: State = {
    theme: 'light',
}

const reducer = (state: State, action: Action): State => {
    if(action.type === 'SET_THEME') {
        return {
            ...state,
            theme: action.theme,
        }
    }
    return state
}

export const useValue = () => useReducer(reducer, initialState)

export const {
    Provider,
    useTrackedState,
    useUpdate: useDispatch,
} = createContainer(useValue)
