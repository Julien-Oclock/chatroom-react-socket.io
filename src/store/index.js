import { legacy_createStore as createStore} from 'redux'
import reducer from './reducer'


//On  créée le store en lui passant le reducer afin de transformer les actions
// en changement d'état, et pour lui donner un état initial par default
const store = createStore(
    reducer, // 'preloaded state' should be here at the second parameters, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
