import { configureStore, createSlice } from '@reduxjs/toolkit';

import { InputType } from './interfaces/input-types.interface';

export interface RootStateType {
  state: {
    [key: string]: InputType;
  };
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
