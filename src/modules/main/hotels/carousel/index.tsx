import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import styles from "./carousel.module.scss"
import Carousel from "better-react-carousel";


const MyCarousel = () => {
  const images = useSelector((state: RootState) => state.carouselReducer.data)

  return (
    <div className={styles.wrapper}>
      <Carousel cols={4} rows={1} gap={30} loop>
        {images.map((it, key) => <Carousel.Item key={key}><img className={styles.image_item} src={it} alt={"image"}/> </Carousel.Item>)}
      </Carousel>
    </div>
  )
};

export default MyCarousel;