import { combineReducers } from 'redux'
import repositoriesReducer from './repositories.reducer'
import usersReducer from './users.reducer'
import organisationsReducer from './organisations.reducer'

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
  users: usersReducer,
  organisations: organisationsReducer
})

export default rootReducer
