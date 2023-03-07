import React from 'react';
import styles from "./hotels.module.scss"
import {formatDate} from "../../../utils/formatDate";
import MyCarousel from "./carousel";
import HotelList from "./hotel-list";
import {data1} from "../../../static/data";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {declOfNum} from "../../../utils/declOfNum";

const Hotels = () => {
  const currentDate = formatDate(new Date());
  const likedCount = useSelector((state: RootState) => state.likedReducer.data.length)
  const hotelList = useSelector((state: RootState) => state.hotelsReducer.data)
  const declinationHotel = declOfNum(likedCount, ['отель', 'отеля', 'отелей']);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.header_left}>{"Отели > Москва"}</div>
        <div className={styles.header_right}>{currentDate}</div>
      </div>
      <div className={styles.carousel}>
        <MyCarousel/>
      </div>
      <div className={styles.title}>{"Добавлено в избранное:"}<span className={styles.hotels_count}>{likedCount}</span>{declinationHotel}</div>
      <div>
        <HotelList data={hotelList}/>
      </div>
    </div>
  );
};

export default Hotels;