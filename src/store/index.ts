import {
  Action,
  combineReducers,
  configureStore,
  Reducer,
  Slice,
  ThunkAction,
} from "@reduxjs/toolkit";

import { AppSlice } from "slices";

interface ISimpleMap {
  [field: string]: Reducer;
}
const reducerMap: ISimpleMap = {
  [AppSlice.name]: AppSlice.reducer,
};

export const store = configureStore({
  reducer: combineReducers(reducerMap),
});

export const registerSlice = (slice: Slice): void => {
  reducerMap[slice.name] = slice.reducer;
  store.replaceReducer(combineReducers(reducerMap));
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
