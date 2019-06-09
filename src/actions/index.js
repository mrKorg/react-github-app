import axios from 'axios'

const API_URL = 'https://api.github.com/users'

export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES'
export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS'
export const FETCH_REPOSITORIES_FAILED = 'FETCH_REPOSITORIES_FAILED'

export const ADD_USER = 'ADD_USER'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAILED = 'ADD_USER_FAILED'

export const fetchRepositories = (user) => {
  return (dispatch) => {
    dispatch({type: FETCH_REPOSITORIES})
    const request = axios.get(`${API_URL}/${user}/repos`)
    return request.then(
      response => {
        dispatch(fetchRepositoriesSuccess(response.data, user))
        dispatch(addUserSuccess(user))
      },
      error => {
        dispatch(fetchRepositoriesFailed(error.message, user))
        dispatch(addUserFailed(user))
      }
    )
  }
}

export function fetchRepositoriesSuccess (data) {
  return {
    type: FETCH_REPOSITORIES_SUCCESS,
    payload: data
  }
}

export function fetchRepositoriesFailed (error) {
  return {
    type: FETCH_REPOSITORIES_FAILED,
    payload: error
  }
}

export function addUser (user) {
  return {
    type: ADD_USER,
    payload: user
  }
}

export function addUserSuccess (data) {
  return {
    type: ADD_USER_SUCCESS,
    payload: data
  }
}

export function addUserFailed (user) {
  return {
    type: ADD_USER_FAILED,
    payload: user
  }
}
