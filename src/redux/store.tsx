import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import hotelsReducer from "./hotelsReducer";
import carouselReducer from "./carouselReducer";
import authReducer from "./authReducer";
import likedReducer from "./likedReducer";

const rootReducer = combineReducers({
  hotelsReducer,
  carouselReducer,
  authReducer,
  likedReducer
});

// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch