import {AuthorsState} from './types';
import {authorsReducer} from './index';
import {authorsActions} from './actions-creators';


let startState: AuthorsState;

beforeEach(() => {
    startState = {
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

})


test('Author should be added', () => {
    const newAuthor = {
        lastName: 'Бульба',
        firstName: 'Константин'
    }
    const action = authorsActions.addAuthor(newAuthor)
    const endState = authorsReducer(startState, action)

    const keys = Object.keys(endState.authors)

    expect(keys.length).toBe(4)
})

test('Author should be deleted', () => {
    const ID = '1'

    const action = authorsActions.removeAuthor(ID)
    const endState = authorsReducer(startState, action)

    const keys = Object.keys(endState.authors)

    expect(keys.length).toBe(2)
    expect(endState.authors[ID]).not.toBeDefined()

})


test('Author should be changed', () => {

    const changedAuthor = {
        id: '3',
        lastName: 'Бульба',
        firstName: 'Константин'
    }

    const action = authorsActions.setAuthor(changedAuthor)
    const endState = authorsReducer(startState, action)


    expect(endState.authors[changedAuthor.id].first_name).toBe(changedAuthor.firstName)
    expect(endState.authors[changedAuthor.id].last_name).toBe(changedAuthor.lastName)
})