import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import hotelsReducer, {watchFetchHotels} from "./hotelsReducer";
import carouselReducer from "./carouselReducer";
import authReducer from "./authReducer";
import likedReducer from "./likedReducer";
import createSagaMiddleware from "redux-saga"
import infoReducer from "./infoReducer";

const rootReducer = combineReducers({
  hotelsReducer,
  carouselReducer,
  authReducer,
  likedReducer,
  infoReducer
});

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchFetchHotels)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch