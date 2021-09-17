import {BooksActions, BooksEvent, BooksState, BookType} from './types';
import {v1} from 'uuid'
import {AuthorEvents, AuthorsActions} from '../author/types'

const initialState: BooksState = {
    books: {
        '1': {
            id: '1',
            title: 'War and Peace',
            author_id: '1',
            created_at: '2021-09-17',
            year: '1867-12-12'
        },
        '2': {
            id: '2',
            title: 'Atlas Shrugged',
            author_id: '2',
            created_at: '2021-09-17',
            year: '1957-08-10'
        },
        '3': {
            id: '3',
            title: 'Fahrenheit 451',
            author_id: '3',
            created_at: '2021-09-17',
            year: '1953-05-14'
        }
    },
    status: 'idle',
    isLoading: false
}


export const booksReducer = (state = initialState, action: BooksActions | AuthorsActions): BooksState => {
    switch (action.type) {
        case BooksEvent.SET_BOOK:
            return {
                ...state, books: {
                    ...state.books, [action.payload.id]: {
                        ...state.books[action.payload.id],
                        title: action.payload.title,
                        author_id: action.payload.authorID,
                        year: action.payload.year
                    }
                }
            }
        case BooksEvent.ADD_BOOK:
            const newBookID = v1()
            const authorID = action.payload.author_id ? action.payload.author_id : v1()
            const book: BookType = {
                ...action.payload,
                id: newBookID,
                author_id: authorID
            }
            return {
                ...state, books: {
                    ...state.books, [newBookID]: book
                }
            }
        case BooksEvent.REMOVE_BOOK:
            const stateCopy = {...state, books: {...state.books}}
            delete stateCopy.books[action.payload]
            return stateCopy

        case AuthorEvents.REMOVE_AUTHOR:
            const newState = {...state}
            const keys = Object.keys(state.books)
            keys.forEach((id) => {
                if (newState.books[id].author_id === action.payload) {
                    delete newState.books[id]
                }
            })
            return newState
        case BooksEvent.SET_IS_LOADING:
            return {
                ...state, isLoading: action.payload
            }
        case BooksEvent.SET_STATUS:
            return {
                ...state, status: action.payload
            }

        default:
            return state
    }
}




