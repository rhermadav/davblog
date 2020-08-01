import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE} from './types';
import Axios from 'axios';
import Cookie from 'js-cookie';

const signinUser = (email,password) =>async (dispatch) =>{
      dispatch({type:SIGN_IN_REQUEST, payload:{email,password} })
      try {
        const {data} = await Axios.post('http://localhost:5000/users/signin',{email,password});
        dispatch({type: SIGN_IN_SUCCESS, payload:data})
        Cookie.set('userinfo',JSON.stringify(data));
      } catch (error) {
        dispatch({type: SIGN_IN_FAILURE, payload: error.message})
      }
}

const registerUser = (firstname,lastname,username,email,password,passwordCheck) =>async (dispatch) =>{
      dispatch({type:REGISTER_REQUEST, payload:{firstname,lastname,username,email,password,passwordCheck} })
      try {
        const {data} = await Axios.post('http://localhost:5000/users/register',{firstname,lastname,username,email,password,passwordCheck});
        dispatch({type: REGISTER_SUCCESS, payload:data})
        Cookie.set('userinfo',JSON.stringify(data));
      } catch (error) {
        dispatch({type: REGISTER_FAILURE, payload: error.message})
      }
}

export {signinUser, registerUser};