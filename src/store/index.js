import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ))

  if (module.hot) {
    // Enable webpack hot module replacement for reducers
    module.hot.accept(
      '../reducers',
      () => {
        const rootReducer = require('../reducers').default
        store.replaceReducer(rootReducer)
      }
    )
  }

  return store
}

export default configureStore
