import {CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE,POST_LIST_REQUEST,POST_LIST_SUCCESS,POST_LIST_FAILURE,GET_POST_REQUEST,GET_POST_SUCCESS, GET_POST_FAILURE} from '../Actions/types'

function savepostReducer (state = {post:{}}, action) {
  switch (action.type) {
      case CREATE_POST_REQUEST :
          return { ...state,  loading: true }
      case CREATE_POST_SUCCESS:
      return { ...state,success:true, loading: false, post:action.payload }
      case CREATE_POST_FAILURE:
          return { ...state, loading: false, error:action.payload }   
      default:
          return state
  }
}

function postlistReducer (state = { posts:[]}, action) {
  switch (action.type) {
      case POST_LIST_REQUEST:
          return { ...state,  loading: true, }
      case POST_LIST_SUCCESS:
      return { ...state, loading: false, posts :action.payload }
      case POST_LIST_FAILURE:
          return { ...state, loading: false, error:action.payload }   
      default:
          return state
  }
}

function postdetailReducer (state = { post: {} }, action) {
  switch (action.type) {
      case GET_POST_REQUEST:
          return { ...state,  loading: true }
      case GET_POST_SUCCESS:
      return { ...state, loading: false, post:action.payload }
      case GET_POST_FAILURE:
          return { ...state, loading: false, error:action.payload }   
      default:
          return state
  }
}

function postdeleteReducer (state = {post: {}}, action) {
  switch (action.type) {
      case DELETE_POST_REQUEST:
          return { ...state,  loading: true }
      case DELETE_POST_SUCCESS:
      return { ...state, loading: false, post:action.payload }
      case DELETE_POST_FAILURE:
          return { ...state, loading: false, error:action.payload }   
      default:
          return state
  }
}

export {savepostReducer,postlistReducer,postdeleteReducer,postdetailReducer}