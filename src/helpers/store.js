import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers/index'
import { Provider } from 'react-redux'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(logger)
  )
)
