import axios from 'axios'

const API_URL = 'https://api.github.com'

export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES'
export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS'
export const FETCH_REPOSITORIES_FAILED = 'FETCH_REPOSITORIES_FAILED'

export const FETCH_ORGANISATION = 'FETCH_ORGANISATION'
export const FETCH_ORGANISATION_SUCCESS = 'FETCH_ORGANISATION_SUCCESS'
export const FETCH_ORGANISATION_FAILED = 'FETCH_ORGANISATION_FAILED'

export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAILED = 'ADD_USER_FAILED'

export const fetchRepositories = (user) => {
  return (dispatch) => {
    dispatch({type: FETCH_REPOSITORIES})
    const request = axios.get(`${API_URL}/users/${user}/repos`)
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

export const fetchOrganisations = (user) => {
  return (dispatch) => {
    dispatch({type: FETCH_ORGANISATION})
    const request = axios.get(`${API_URL}/users/${user}/orgs`)
    return request.then(
      response => {
        dispatch(fetchOrganisationsSuccess(response.data, user))
      },
      error => {
        dispatch(fetchOrganisationsFailed(error.message, user))
      }
    )
  }
}

export function fetchOrganisationsSuccess (data) {
  return {
    type: FETCH_ORGANISATION_SUCCESS,
    payload: data
  }
}

export function fetchOrganisationsFailed (error) {
  return {
    type: FETCH_ORGANISATION_FAILED,
    payload: error
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
