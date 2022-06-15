import { legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import authMiddleware from 'src/Middleware/auth'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//On  créée le store en lui passant le reducer afin de transformer les actions
// en changement d'état, et pour lui donner un état initial par default
const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(
      authMiddleware,
    ),
  ),
);
export default store;
