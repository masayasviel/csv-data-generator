import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface RootStateType {
  state: {};
}

const InitialState: RootStateType['state'] = {};

export const stateSlice = createSlice({
  name: 'state',
  initialState: InitialState,
  reducers: {},
});

export const store = configureStore({
  reducer: {
    state: stateSlice.reducer,
  },
});
