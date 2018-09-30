import {createStore, applyMiddleware} from 'redux';
import rootReducers from '../reducers/rootReducers'
import thunk from 'redux-thunk'

const configureStore = preloadState => {
    return createStore(
        rootReducers,
        preloadState,
        applyMiddleware(thunk)
    );
}

export default configureStore;