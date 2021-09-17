import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import {getLocalStorage, setLocalStorage} from '../utils/localStorage';

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, getLocalStorage('MY-APP'), applyMiddleware(thunkMiddleware))


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


store.subscribe(() => {
    const state = store.getState()
    setLocalStorage<RootState>('MY-APP', state)
})





