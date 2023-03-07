import React from "react";
import styles from "./hotel-list.module.scss";
import Rating from "../../../common/rating";
import {useDispatch, useSelector} from "react-redux";
import {delHotel, likeHotel} from "../../../../redux/likedReducer";
import {hotelType} from "../../../../types";
import {RootState} from "../../../../redux/store";
import {declOfNum} from "../../../../utils/declOfNum";

export interface IHotelList {
  data: hotelType[]
}

const HotelList: React.FC<IHotelList> = ({data}) => {
  return (
    <div className={styles.wrapper}>
      {data.map((it, key) => <HotelListItem key={key} data={it}/>)}
    </div>
  );
};

export interface IHotelListItem {
  data: hotelType
}

export const HotelListItem: React.FC<IHotelListItem> = ({data}) => {
  const dispatch = useDispatch()
  const likedData = useSelector((state: RootState) => state.likedReducer)
  const info = useSelector((state: RootState) => state.infoReducer)
  const declinationHotel = declOfNum(info.daysCount, ['день', 'дня', 'дней']);
  const unliked = likedData.data.indexOf(data) === -1
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
          <div
            className={styles.item__top_heart}
            onClick={() => {
              unliked ? dispatch(likeHotel(data)) : dispatch(delHotel(data.hotelId))
            }}
          >
            {unliked ?
              <img src={"/images/heart.svg"} alt={"heart"}/> :
              <img src={"/images/red-heart.svg"} alt={"heart"}/>
            }
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
    </div>
  )
}
export default HotelList;