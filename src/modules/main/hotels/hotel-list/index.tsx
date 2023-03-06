import React from "react";
import styles from "./hotel-list.module.scss";
import Rating from "../../../common/rating";

export interface IHotelList {
  data: {
    hotelName: string;
    date: string;
    priceAvg: number;
    daysCount: number;
    stars: number;
  }[]
}

const HotelList: React.FC<IHotelList> = ({data}) => {
  return (
    <div className={styles.wrapper}>
      {data.map((it, key) => <HotelListItem key={key} data={it}/>)}
    </div>
  );
};

export interface IHotelListItem {
  data: {
    hotelName: string;
    date: string;
    priceAvg: number;
    daysCount: number;
    stars: number;
  }
}

export const HotelListItem: React.FC<IHotelListItem> = ({data}) => {
  return (
    <div className={styles.element}>
      <div className={styles.home_wrapper}>
        <div className={styles.home_wrapper_image}>
          <img className={styles.img} src="/images/home.svg" alt="home"/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.item__top}>
          <div className={styles.item__top_name}>{data.hotelName}</div>
          <div className={styles.item__top_heart}><img src={"/images/heart.svg"} alt={"heart"}/></div>
        </div>
        <div className={styles.item__middle}>{data.date}{" - "}{data.daysCount}{" день"}</div>
        <div className={styles.item__bottom}>
          <div className={styles.item__bottom_stars}><Rating stars={data.stars}/></div>
          <div className={styles.item__bottom_price}>
            <span className={styles.price}>{"Price "}</span>
            {data.priceAvg.toLocaleString('ru-Ru', {
              style: 'currency',
              currency: 'RUB',
              minimumFractionDigits: 0
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default HotelList;