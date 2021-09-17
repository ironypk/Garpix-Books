import {AuthorEvents, AuthorsActions, AuthorsState} from './types';
import {v1} from 'uuid';


const initialState: AuthorsState = {
    authors: {
        '1': {
            id: '1',
            first_name: 'LEO',
            last_name: 'Tolstoy'
        },
        '2': {
            id: '2',
            first_name: 'Ayn',
            last_name: 'Rand'
        },
        '3': {
            id: '3',
            first_name: 'Ray',
            last_name: 'Bradbury'
        },
    },
    status: 'idle',
    isLoading: false
}

export const authorsReducer = (state = initialState, action: AuthorsActions): AuthorsState => {
    switch (action.type) {
        case AuthorEvents.ADD_AUTHOR:
            const id = v1()
            return {
                ...state, authors: {
                    ...state.authors,
                    [id]: {
                        id: id,
                        first_name: action.payload.firstName,
                        last_name: action.payload.lastName
                    }
                }
            }
        case AuthorEvents.REMOVE_AUTHOR:
            const stateCopy = {...state, authors: {...state.authors}}
            delete stateCopy.authors[action.payload]
            return stateCopy
        case AuthorEvents.SET_AUTHOR:
            return {
                ...state,
                authors: {
                    ...state.authors,
                    [action.payload.id]: {
                        ...state.authors[action.payload.id],
                        last_name: action.payload.lastName,
                        first_name: action.payload.firstName
                    }
                }
            }
        case AuthorEvents.SET_IS_LOADING:
            return {
                ...state, isLoading: action.payload
            }
        case AuthorEvents.SET_AUTHOR_STATUS:
            return {
                ...state, status: action.payload
            }
        default:
            return state
    }
}
