import {combineReducers, createStore} from "redux";
import hotelsReducer from "./hotelsReducer";
import carouselReducer from "./carouselReducer";

const rootReducer = combineReducers({
  hotelsReducer,
  carouselReducer
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch