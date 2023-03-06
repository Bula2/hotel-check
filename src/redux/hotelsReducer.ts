import {AnyAction} from "redux";

const initialState: any = {
  count: 10
}

const hotelsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default hotelsReducer;