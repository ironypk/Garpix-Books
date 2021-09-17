import {BooksState, NoIDBookType} from './types';
import {booksReducer} from './index';
import {authorsActions} from '../author/actions-creators';
import {booksActions} from './action-creators';


let startState: BooksState

beforeEach(() => {
    startState = {
        books: {
            '1': {
                id: '1',
                title: 'War and Peace',
                author_id: '1',
                created_at: '1867-12-12',
                year: '1867-12-12'
            },
            '2': {
                id: '2',
                title: 'Atlas Shrugged',
                author_id: '2',
                created_at: '1867-12-12',
                year: '1957-08-10'
            },
            '3': {
                id: '3',
                title: 'Fahrenheit 451',
                author_id: '3',
                created_at: '1867-12-12',
                year: '1953-05-14'
            }
        },
        status: 'idle',
        isLoading: false
    }
})


test('book should be changed', () => {
    const book = {
        id: '2',
        year: '1992-11-12',
        title: 'test',
        authorID: '1243'
    }
    const action = booksActions.changeBook({...book})
    const endState = booksReducer(startState, action)

    const keys = Object.keys(endState.books)

    expect(keys.length).toBe(3)
    expect(endState.books[book.id].title).toBe(book.title)
    expect(endState.books[book.id].year).toBe(book.year)
    expect(endState.books[book.id].author_id).toBe(book.authorID)

})

test('book should be delete', () => {
    const bookID = '2'
    const action = booksActions.removeBook(bookID)
    const endState = booksReducer(startState, action)

    const keys = Object.keys(endState.books)

    expect(keys.length).toBe(2)
    expect(endState.books[bookID]).not.toBeDefined()
})

test('book should be added', () => {
    const newBook: { author_id?: string } & NoIDBookType = {
        title: 'Test',
        year: '1992-11-12',
        created_at: '1867-12-12',
        author_id: '4'
    }
    const action = booksActions.addBook(newBook)
    const endState = booksReducer(startState, action)

    const keys = Object.keys(endState.books)

    const addedBook = keys.find(id => endState.books[id].title === 'Test')

    if (!addedBook) {
        throw Error('new book should be added')
    }
    expect(keys.length).toBe(4)
})


test('book should be deleted', () => {
    const authorID = '2'
    const action = authorsActions.removeAuthor(authorID)
    const endState = booksReducer(startState, action)

    const keys = Object.keys(endState.books)


    expect(keys.length).toBe(2)
    expect(endState.books[authorID]).not.toBeDefined()


})
