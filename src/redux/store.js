import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './tracks/tracksReducer';

const store = configureStore({
    reducer: {
        musicInfo: tracksReducer,
    },
});

export default store;