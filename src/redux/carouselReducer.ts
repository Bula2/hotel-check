import {AnyAction} from "redux";

interface IInitialState{
  data: string[]
}

const initialState: IInitialState = {
  data: [
    "/images/carousel-1.png",
    "/images/carousel-2.png",
    "/images/carousel-3.png",
    "/images/carousel-1.png",
    "/images/carousel-2.png",
    "/images/carousel-3.png",
    "/images/carousel-1.png",
    "/images/carousel-2.png",
    "/images/carousel-3.png",
    "/images/carousel-1.png",
    "/images/carousel-2.png",
    "/images/carousel-3.png",
  ]
}

const carouselReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default carouselReducer;