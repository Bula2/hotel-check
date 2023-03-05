import React from 'react';
import styles from "./liked-list.module.scss"
import Rating from "../../../common/rating";

export interface ILikedList {
  data : {
    hotelName: string;
    date: string;
    priceAvg: number;
    daysCount: number;
    stars: number;
  }[]
}
const LikedList: React.FC<ILikedList>= ({data}) => {
  return (
    <div className={styles.wrapper}>
      {data.map((it, key) => <LikedListItem key={key} data={it}/>)}
    </div>
  );
};

export interface ILikedListItem{
  data : {
    hotelName: string;
    date: string;
    priceAvg: number;
    daysCount: number;
    stars: number;
  }
}

export const LikedListItem: React.FC<ILikedListItem> = ({data}) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__top}>
        <div className={styles.item__top_name}>{data.hotelName}</div>
        <div className={styles.item__top_heart}><img src={"/images/red-heart.svg"} alt={"heart"}/></div>
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
  )
}

export default LikedList;