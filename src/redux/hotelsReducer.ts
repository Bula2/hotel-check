import {AnyAction} from "redux";
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "axios";
import {hotelType} from "../types";


const SET_HOTELS = "hotelsReducer/SET_HOTELS";
const REQUEST_HOTELS = "hotelsReducer/REQUEST_HOTELS";
const FAILED_REQUEST_HOTELS = "hotelsReducer/FAILED_REQUEST_HOTELS";

interface IInitialState {
  data: hotelType[]
}

const initialState: IInitialState = {
  data: []
}
const hotelsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_HOTELS: {
      return {
        ...state,
        data : action.values
      }
    }
    case FAILED_REQUEST_HOTELS: {
      return {
        ...state,
        data : []
      }
    }
    default:
      return state
  }
}

const setHotels = (values: hotelType[]) =>
  ({type: SET_HOTELS, values})

const failRequestHotels = () =>
  ({type: FAILED_REQUEST_HOTELS})

export const requestHotels = (location: string, checkIn: string, checkOut: string) =>
  ({type: REQUEST_HOTELS, location, checkIn, checkOut})

export function* watchFetchHotels() {
  yield takeEvery(REQUEST_HOTELS, fetchHotels);
}
export function* fetchHotels (args : {location: string, checkIn: string, checkOut: string, type: string}): any{
  try {
    const data = yield call(() => axios.get("https://engine.hotellook.com/api/v2/cache.json",
      {
        params: {
          location: args.location,
          currency: "rub",
          checkIn: args.checkIn,
          checkOut: args.checkOut,
          limit: 20
        }
      }).then((res: any) => res.data))
    yield put(setHotels(data))
  } catch (e: any) {
    yield put(failRequestHotels())
  }
}
export default hotelsReducer;