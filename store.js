// store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // Importe seu reducer

const store = createStore(rootReducer);

export default store;
