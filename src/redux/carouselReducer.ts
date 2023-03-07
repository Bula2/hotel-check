import {AnyAction} from "redux";

interface IInitialState{
  data: string[]
}

const initialState: IInitialState = {
  data: [
    "/images/carousel-1.png",
    "/images/carousel-2.png",
    "/images/carousel-3.png",
    "/images/carousel-4.jpg",
    "/images/carousel-5.jpg",
    "/images/carousel-6.jpg",
    "/images/carousel-7.jpg",
    "/images/carousel-8.jpg",
    "/images/carousel-9.jpg",
    "/images/carousel-4.jpg",
    "/images/carousel-5.jpg",
    "/images/carousel-6.jpg",
  ]
}

const carouselReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default carouselReducer;