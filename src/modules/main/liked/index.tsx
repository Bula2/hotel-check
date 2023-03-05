import React, {useEffect, useState} from 'react';
import styles from "./liked.module.scss"
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {data1} from "../../../static/data";
import LikedList from "./liked-list";

const Liked = () => {
  const data = data1;
  // const [data, setData] = useState<any[]>([]);
  // useEffect(() => {
  //   axios.get(
  //     "http://engine.hotellook.com/api/v2/cache.json",
  //     {
  //       params: {
  //         location: "moscow",
  //         currency: "rub",
  //         checkIn: `2023-03-06`,
  //         checkOut: `2023-03-09`,
  //         limit: 4
  //       }
  //     }).then(resp => setData(resp.data)).catch(err => console.log(err))
  // }, [])
  // console.log(data)
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Избранное
      </div>
      <div className={styles.sort}>
        <div className={styles.sort__item}>Рейтинг <img className={styles.sort__item_img} src={"/images/up.svg"} alt={"sort"}/></div>
        <div className={styles.sort__item}>Цена <img className={styles.sort__item_img} src={"/images/up.svg"} alt={"sort"}/></div>
      </div>
      <LikedList data={data}/>
    </div>
  );
};

export default Liked;