import {createStore} from 'redux';
import rootReducers from '../reducers/rootReducers'

const configureStore = preloadState => {
    return createStore(
        rootReducers,
        preloadState
    );
}

export default configureStore;