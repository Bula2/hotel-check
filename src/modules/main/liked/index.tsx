import React, {useEffect, useState} from 'react';
import styles from "./liked.module.scss"
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import LikedList from "./liked-list";
import cx from "classnames"

const Liked = () => {
  const currentData = useSelector((state: RootState) => state.likedReducer.data);
  const [data, setData] = useState<any[]>();
  const [rating, setRating] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    setData(currentData)
  }, [currentData])
  const changeRating = () => {
    setPrice(0);
    if (rating === 2) {
      setData(currentData);
      setRating(0);
    } else {
      if (rating === 1){
        const newData = data?.sort((a, b) => {
          if (a.stars < b.stars) {
            return 1;
          }
          if (a.stars > b.stars) {
            return -1;
          }
          return 0;
        })
        setData(newData);
      } else if (rating === 0){
        const newData = data?.sort((a, b) => {
          if (a.stars > b.stars) {
            return 1;
          }
          if (a.stars < b.stars) {
            return -1;
          }
          return 0;
        })
        setData(newData);
      }
      setRating(rating + 1)
    }
  }

  const changePrice = () => {
    setRating(0);
    if (price === 2) {
      setData(currentData);
      setPrice(0)
    } else {
      if (price === 1) {
        const newData = data?.sort((a, b) => {
          if (a.priceAvg < b.priceAvg) {
            return 1;
          }
          if (a.priceAvg > b.priceAvg) {
            return -1;
          }
          return 0;
        })
        setData(newData);
      } else if (price === 0){
        const newData = data?.sort((a, b) => {
          if (a.priceAvg > b.priceAvg) {
            return 1;
          }
          if (a.priceAvg < b.priceAvg) {
            return -1;
          }
          return 0;
        })
        setData(newData);
      }
      setPrice(price + 1)
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Избранное
      </div>
      <div className={styles.sort}>
        <div
          onClick={() => changeRating()}
          className={cx(styles.sort__item, rating === 0 && styles.sort__item_gray)}
        >
          Рейтинг
          <div className={styles.sort__item_img}>
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.014719 4.24264L4.25736 0L8.5 4.24264Z"
                fill={rating === 1 ? "#41522E" : "#E5E5E5"}/>
              <path
                d="M8.5 7.83247L7.43934 6.77181L4.25736 9.95379L1.07538 6.77181L0.014719 7.83247L4.25736 12.0751L8.5 7.83247Z"
                fill={rating === 2 ? "#41522E" : "#E5E5E5"}/>
            </svg>
          </div>
        </div>
        <div onClick={()=> changePrice()} className={cx(styles.sort__item, price === 0 && styles.sort__item_gray)}>
          Цена
          <div className={styles.sort__item_img}>
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.014719 4.24264L4.25736 0L8.5 4.24264Z"
                fill={price === 1 ? "#41522E" : "#E5E5E5"}/>
              <path
                d="M8.5 7.83247L7.43934 6.77181L4.25736 9.95379L1.07538 6.77181L0.014719 7.83247L4.25736 12.0751L8.5 7.83247Z"
                fill={price === 2 ? "#41522E" : "#E5E5E5"}/>
            </svg>
          </div>
        </div>
      </div>
      <LikedList data={data}/>
    </div>
  );
};

export default Liked;