import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isLoading: false
};

const reducers = {
    changeLoading: (state = initialState, action) => {
        state.isLoading = action.payload;
    }
};

const app = createSlice({
    name: 'app',
    initialState,
    reducers
});

export const { changeLoading } = app.actions;

// test desatch 目前未使用
export const incrementAsync = amount => dispatch => {
    dispatch(changeLoading(amount));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    app: app.reducer
};
