import { createStore } from 'react-redux';

const reducer = (state = {}, action) => state; 

const store = createStore(reducer);

export default store;