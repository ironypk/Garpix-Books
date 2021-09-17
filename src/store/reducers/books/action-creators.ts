import {BooksActions, BooksEvent, NoIDBookType, StatusType} from './types';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../../index';
import {wait} from '../../../utils/wait';

export const booksActions = {
    changeBook: (payload: { id: string, title: string, year: string, authorID: string }) => {
        return {
            type: BooksEvent.SET_BOOK,
            payload
        } as const
    },
    removeBook: (id: string) => {
        return {
            type: BooksEvent.REMOVE_BOOK,
            payload: id
        } as const
    },
    addBook: (book: { author_id?: string } & NoIDBookType) => {
        return {
            type: BooksEvent.ADD_BOOK,
            payload: book
        } as const
    },
    setIsLoading: (payload: boolean) => {
        return {
            type: BooksEvent.SET_IS_LOADING,
            payload
        } as const
    },
    setStatus: (payload: StatusType) => {
        return {
            type: BooksEvent.SET_STATUS,
            payload
        } as const
    }
}


export const editBookTC = (payload: { id: string, title: string, year: string, authorID: string }): ThunkAction<void, RootState, {}, BooksActions> =>
    async (dispatch) => {
        dispatch(booksActions.setIsLoading(true))
        try {
            await wait(300, 'Книга успешно изменена')
            dispatch(booksActions.changeBook(payload))
            dispatch(booksActions.setStatus('success'))
        } catch (e) {
            console.log('Error: ', e)
        } finally {
            dispatch(booksActions.setIsLoading(false))
            dispatch(booksActions.setStatus('idle'))
        }
    }

export const addBookTC = (book: { author_id?: string } & NoIDBookType): ThunkAction<void, RootState, {}, BooksActions> =>
    async (dispatch) => {
        dispatch(booksActions.setIsLoading(true))
        try {
            await wait(300, 'Книга успешно добавлена')
            dispatch(booksActions.addBook(book))
            dispatch(booksActions.setStatus('success'))
        } catch (e) {
            console.log('Error: ', e)
        } finally {
            dispatch(booksActions.setIsLoading(false))
            dispatch(booksActions.setStatus('idle'))
        }
    }

export const removeBookTC = (id: string): ThunkAction<void, RootState, {}, BooksActions> =>
    async (dispatch) => {
        dispatch(booksActions.setIsLoading(true))
        try {
            await wait(300, 'Книга успешно удалена')
            dispatch(booksActions.removeBook(id))
        } catch (e) {
            console.log('Error: ', e)
        } finally {
            dispatch(booksActions.setIsLoading(false))
        }
    }


export const allBookTC = {
    editBookTC, addBookTC, removeBookTC
}