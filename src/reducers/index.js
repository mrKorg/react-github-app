import { combineReducers } from 'redux'
import repositoriesReducer from './repositories.reducer'
import usersReducer from './users.reducer'

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
  users: usersReducer
})

export default rootReducer
