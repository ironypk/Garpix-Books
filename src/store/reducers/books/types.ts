import {InferActionsType} from '../../../models';
import {booksActions} from './action-creators';

export type BooksState = {
    books: {
        [key: string]: BookType
    }
    status: StatusType
    isLoading: boolean
}

export type StatusType = 'success' | 'idle' | 'error'


export enum BooksEvent {
    SET_BOOK = 'SET_TITLE',
    REMOVE_BOOK = 'REMOVE_BOOK',
    ADD_BOOK = 'ADD_BOOK',
    SET_IS_LOADING = 'BOOK/SET_IS_LOADING',
    SET_STATUS = 'BOOK/SET_STATUS'
}


export type BookType = {
    id: string
    title: string
    author_id: string
    created_at: string
    year: string
}

export type NoIDBookType = Omit<BookType, 'id' | 'author_id'>

export type BooksActions = InferActionsType<typeof booksActions>