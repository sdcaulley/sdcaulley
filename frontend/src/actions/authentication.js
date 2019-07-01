import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export function registerUser(user, history) {
    return (dispatch) => {
        axios.post('/register', user)
            .then(res => {
                console.log('res = ', res);
                history.push('/login');
            })
            .catch(err => {
                console.log('err', err);
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
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
    };
}

export function setCurrentUser(decoded) {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
}

export function logoutUser(history) {
    return (dispatch) => {
        localStorage.removeItem('jwtToken');
        setAuthToken(false);
        dispatch(setCurrentUser({}));
        history.push('/login');
    };
}
