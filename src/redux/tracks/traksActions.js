import { createAction } from '@reduxjs/toolkit';

const loaderStatus = createAction('musicInfo/loader');

const errorStatus = createAction('musicInfo/error');


export default {
    loaderStatus,
    errorStatus,
};

