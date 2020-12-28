import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Middleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'

import rootReducer, { State } from './reducers'

const middleware = [thunkMiddleware, loggerMiddleware]

const bindMiddleware = (mw: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...mw))
  }

  return applyMiddleware(...middleware)
}

const makeStore: MakeStore = () => {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return createStore(rootReducer, bindMiddleware(middleware))
  }

  const persistConfig = {
    key: 'nextjs',
    whitelist: ['checkoutId', 'customerAccessToken'], // only these keys will be persisted
    storage,
  }

  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    bindMiddleware(middleware),
  )

  // @ts-expect-error
  store.__persistor = persistStore(store) // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

  return store
}

export const wrapper = createWrapper<State>(makeStore, { debug: true })
