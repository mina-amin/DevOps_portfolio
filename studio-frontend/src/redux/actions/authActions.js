import axios from 'axios';
import { LOGIN_SUCCESS, LOGOUT } from './types';

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  return { type: LOGOUT };
};
