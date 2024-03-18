import { combineReducers } from 'redux';
import blogReducer from './blogReducer'; // yapılıcak sıradakı reducerları buraya ekle

const rootReducer = combineReducers({
  blog: blogReducer, 
});

export default rootReducer;