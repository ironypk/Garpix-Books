import {InferActionsType} from '../../../models';
import {authorsActions} from './actions-creators';


export enum AuthorEvents {
    REMOVE_AUTHOR='REMOVE_AUTHOR',
    ADD_AUTHOR = 'ADD_AUTHOR',
    SET_AUTHOR ='SET_AUTHOR',
    SET_IS_LOADING = 'AUTHOR/SET_IS_LOADING',
    SET_AUTHOR_STATUS = 'SET_AUTHOR_STATUS'
}


export type StatusType = 'success' | 'idle' | 'error'

export type AuthorType = {
    id:string,
    last_name:string,
    first_name:string,
}

export type AuthorsState = {
    authors : {
        [key:string] : AuthorType
    },
    status:StatusType
    isLoading:boolean
}

export type AuthorsActions = InferActionsType<typeof authorsActions>

