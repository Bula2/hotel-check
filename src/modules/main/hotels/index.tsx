import React from 'react';
import styles from "./hotels.module.scss"
import {formatDate} from "../../../utils/formatDate";
import MyCarousel from "./carousel";
import HotelList from "./hotel-list";
import {data1} from "../../../static/data";

const Hotels = () => {
  const currentDate = formatDate(new Date());
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.header_left}>{"Отели > Москва"}</div>
        <div className={styles.header_right}>{currentDate}</div>
      </div>
      <div className={styles.carousel}>
        <MyCarousel/>
      </div>
      <div className={styles.title}>{"Добавлено в избранное: "}<span className={styles.hotels_count}>{" 3 "}</span>{" отеля"}</div>
      <div>
        <HotelList data={data1}/>
      </div>
    </div>
  );
};

export default Hotels;