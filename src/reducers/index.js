import { combineReducers } from 'redux'
import {userSigninReducer, userRegisterReducer} from './userReducer'
import {savepostReducer, postlistReducer, postdeleteReducer,postdetailReducer} from './postReducers';

export default combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  savepost: savepostReducer,
  postList: postlistReducer,
  postdelete: postdeleteReducer,
  postDetails: postdetailReducer
})