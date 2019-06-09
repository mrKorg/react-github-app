import _ from 'lodash'
import * as actions from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case actions.ADD_USER_SUCCESS:
    case actions.ADD_USER_FAILED:
      const newState = [...state]
      const index = _.findIndex(newState, item => item.nickName === action.payload)
      let userData = {nickName: action.payload, status: 'exist'}

      if (index > -1) {
        newState.splice(index, 1)
      }

      if (action.type === actions.ADD_USER_FAILED) {
        userData.status = 'not-exist'
      }

      newState.unshift(userData)
      return newState
    default:
      return state
  }
}
