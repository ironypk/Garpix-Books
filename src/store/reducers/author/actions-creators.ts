import {AuthorEvents, AuthorsActions, StatusType} from './types';
import {RootState} from '../../index';
import {ThunkAction} from 'redux-thunk'
import {wait} from '../../../utils/wait';


export const authorsActions = {
    addAuthor: (payload: { lastName: string, firstName: string }) => {
        return {
            type: AuthorEvents.ADD_AUTHOR,
            payload
        } as const
    },
    removeAuthor: (id: string) => {
        return {
            type: AuthorEvents.REMOVE_AUTHOR,
            payload: id
        } as const
    },
    setAuthor: (payload: {
        id: string, lastName: string, firstName: string
    }) => {
        return {
            type: AuthorEvents.SET_AUTHOR,
            payload
        } as const
    },
    setIsLoading: (payload: boolean) => {
        return {
            type: AuthorEvents.SET_IS_LOADING,
            payload
        } as const
    },
    setStatus: (payload: StatusType) => {
        return {
            type: AuthorEvents.SET_AUTHOR_STATUS,
            payload
        } as const
    }
}


export const editAuthorTC = (payload: { id: string, lastName: string, firstName: string }): ThunkAction<void, RootState, {}, AuthorsActions> =>
    async (dispatch) => {
        dispatch(authorsActions.setIsLoading(true))
        try {
            await wait(300, 'Автор успешно изменен')
            dispatch(authorsActions.setAuthor(payload))
            dispatch(authorsActions.setStatus('success'))
        } catch (e) {
            console.log('Error: ', e)
        } finally {
            dispatch(authorsActions.setIsLoading(false))
            dispatch(authorsActions.setStatus('idle'))
        }
    }

export const addAuthorTC = (payload: { lastName: string, firstName: string }): ThunkAction<void, RootState, {}, AuthorsActions> =>
    async (dispatch) => {
        dispatch(authorsActions.setIsLoading(true))
        try {
            await wait(300, 'Автор успешно добавлен')
            dispatch(authorsActions.addAuthor(payload))
            dispatch(authorsActions.setStatus('success'))
        } catch (e) {
            console.log('Error: ', e)
        } finally {
            dispatch(authorsActions.setIsLoading(false))
            dispatch(authorsActions.setStatus('idle'))
        }
    }

export const deleteAuthorTC = (id: string): ThunkAction<void, RootState, {}, AuthorsActions> =>
    async (dispatch) => {
        dispatch(authorsActions.setIsLoading(true))
        try {
            await wait(300, 'Автор успешно удален')
            dispatch(authorsActions.removeAuthor(id))
        } catch (e) {
            console.log('Error: ', e)
        } finally {
            dispatch(authorsActions.setIsLoading(false))
        }
    }


export const allAuthorsTC = {
    editAuthorTC,
    addAuthorTC,
    deleteAuthorTC
}
