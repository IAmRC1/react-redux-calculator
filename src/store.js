import rootReducer from './reducers';
import { createStore, applyMiddleware, compose} from 'redux';
//import { createLogger } from 'redux-logger';

//const loggermiddleware = createLogger();

//const middleware = applyMiddleware(loggermiddleware);

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(rootReducer,
   //composeEnhancers(middleware)
  );

export default Store;