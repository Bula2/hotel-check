import React from 'react';
import styles from "./liked-list.module.scss"
import Rating from "../../../common/rating";
import {hotelType} from "../../../../types";
import {useDispatch, useSelector} from "react-redux";
import {delHotel} from "../../../../redux/likedReducer";
import {RootState} from "../../../../redux/store";
import {declOfNum} from "../../../../utils/declOfNum";

export interface ILikedList {
  data?: hotelType[]
}
const LikedList: React.FC<ILikedList>= ({data}) => {
  return (
    <div className={styles.wrapper}>
      {data?.map((it, key) => <LikedListItem key={key} data={it}/>)}
    </div>
  );
};

export interface ILikedListItem{
  data : hotelType
}

export const LikedListItem: React.FC<ILikedListItem> = ({data}) => {
  const dispatch = useDispatch();
  const info = useSelector((state: RootState) => state.infoReducer)
  const declinationHotel = declOfNum(info.daysCount, ['день', 'дня', 'дней']);
  return (
    <div className={styles.item}>
      <div className={styles.item__top}>
        <div className={styles.item__top_name}>{data.hotelName}</div>
        <div className={styles.item__top_heart} onClick={() => dispatch(delHotel(data.hotelId))}>
          <img src={"/images/red-heart.svg"} alt={"heart"}/>
        </div>
      </div>
      <div className={styles.item__middle}>{info.date}{" - "}{info.daysCount}{" " + declinationHotel}</div>
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