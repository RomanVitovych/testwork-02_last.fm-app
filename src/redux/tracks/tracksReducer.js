import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import traksActions from './traksActions';

const loader = createReducer(false, {
    [traksActions.loaderStatus]: (state, action) => state = action.payload,
});

const error = createReducer(false, {
    [traksActions.errorStatus]: (state, action) => state = action.payload,
});


export default combineReducers({
    loader,
    error,
});
