import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import ajaxCallReducer from './postsReducer';

const rootReducers = combineReducers({
    posts : postsReducer,
    ajaxCall : ajaxCallReducer
}
);

export default rootReducers;
