// src/redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Import your root reducer

const store = createStore(rootReducer); // Create Redux store with root reducer

export default store;