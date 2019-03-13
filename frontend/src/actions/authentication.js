import axios from 'axios';
import { GET_ERRORS } from './types';

export function registerUser(user, history) {
    return (dispatch) => {
        axios.post('/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
    };
}

export function loginUser(user) {
    return (dispatch) => {
        axios.post('/login', user)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
    };
}
