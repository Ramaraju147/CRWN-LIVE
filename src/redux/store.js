import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

<<<<<<< HEAD
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
=======
if(process.env.NODE_ENV=='development'){
    middlewares.push('logger');
>>>>>>> 80a2c17db4d0f36f9bc6b72e3333025253fa6f20
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistStore };
