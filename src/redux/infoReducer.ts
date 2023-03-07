import {AnyAction} from "redux";
import {formatDate} from "../utils/formatDate";

const ADD = "infoReducer/ADD";
interface IInitialState{
  location: string | null;
  daysCount: number | null;
  date: string | null;
}

const initialState: IInitialState = {
  location: "Москва",
  daysCount: 1,
  date: formatDate(new Date())
}

const infoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        location: action.location.charAt(0).toUpperCase() + action.location.slice(1),
        daysCount: action.daysCount,
        date: action.date
      }
    }
    default:
      return state
  }
}

export const addInfo = (location: string, daysCount: number, date: string) =>
  ({type: ADD, location, daysCount, date})

export default infoReducer;