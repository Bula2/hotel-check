import {AnyAction} from "redux";
import {hotelType} from "../types";

const ADD_HOTEL = "likedReducer/ADD_HOTEL";
const DEL_HOTEL = "likedReducer/DEL_HOTEL";

interface IInitialState {
  data: hotelType[]
}

const initialState: IInitialState = {
  data: []
}

const likedReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_HOTEL: {
      if (state.data.indexOf(action.item) == -1) {
        return {
          ...state,
          data: [...state.data, action.item]
        }
      }
      return {
        ...state
      }
    }
    case DEL_HOTEL: {
      return {
        ...state,
        data: state.data.filter(item => item.hotelId !== action.id)
      }
    }
    default:
      return state
  }
}

export const likeHotel = (item: hotelType) =>
  ({type: ADD_HOTEL, item})

export const delHotel = (id: number) =>
  ({type: DEL_HOTEL, id})
export default likedReducer;