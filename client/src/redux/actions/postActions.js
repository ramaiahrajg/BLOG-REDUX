import actionTypes from '../actionTypes/actionTypes'
import apiCall from '../../services/apiCall';

export const getAllPosts = () => {
    return dispatch => {
        dispatch(postsApiCallStart);
        apiCall('posts')
        .then(data=> {
            dispatch(postsApiCallSuccess);
            dispatch(getPosts(data));
        })
        .catch(err=> {
            dispatch(postsApiCallFailure);
        });
    };
}
export const getPosts = (posts)=> {

    return {
        type : actionTypes.GET_POSTS,
        payload : posts
    }
}

export const postsApiCallStart = () => {
    return {
        type : actionTypes.GET_POSTS_AJAX_CALL_START
    }
}
export const postsApiCallSuccess = () => {
    return {
        type : actionTypes.GET_POSTS_AJAX_CALL_SUCCESS
    }
}

export const postsApiCallFailure = () => {
    return {
        type : actionTypes.GET_POSTS_AJAX_CALL_FAILURE
    }
}

