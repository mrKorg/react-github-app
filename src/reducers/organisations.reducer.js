import _ from 'lodash'
import * as actions from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case actions.FETCH_ORGANISATION_SUCCESS:
      return _.mapKeys(action.payload, 'id')
    case actions.FETCH_ORGANISATION_FAILED:
      return []
    default:
      return state
  }
}
