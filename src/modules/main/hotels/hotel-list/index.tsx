import React, {useEffect, useState} from "react";
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
  const [unliked, setUnliked] = useState((likedData.data.filter(item => item.hotelId === data.hotelId && item.priceAvg === data.priceAvg).length === 0));
  useEffect(() => {
    setUnliked((likedData.data.filter(item => item.hotelId === data.hotelId && item.priceAvg === data.priceAvg).length === 0));
  }, [likedData, data])
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
              unliked ? dispatch(likeHotel({...data, date: info.date, daysCount: info.daysCount})) : dispatch(delHotel(data.hotelId))
            }}
          >
            {unliked ?
              <svg className={styles.heart_hover_white} width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z"
                      fill="white" stroke="#C4C4C4"/>
              </svg>
              :
              <svg className={styles.heart_hover_red} width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z"
                      fill="#E55858" stroke="#E55858"/>
              </svg>

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