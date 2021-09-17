import {allAuthorsTC, authorsActions} from './reducers/author/actions-creators';
import {allBookTC, booksActions} from './reducers/books/action-creators';


export const allActionsCreators = {
    ...authorsActions,
    ...booksActions,
    ...allAuthorsTC,
    ...allBookTC
}