import React from 'react';
import styles from "./main.module.scss"
import {Link} from "react-router-dom";
import Search from "../../modules/main/search";
import Liked from "../../modules/main/liked";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.header_left}>Simple Hotel Check</div>
        <div className={styles.header_right}>
          <Link className={styles.header_right_link} to={"/"}>
            Выйти
            <img className={styles.header_right_link__img} src={"/images/log-out.png"} alt={"Выйти"}/>
          </Link>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.menu}>
          <div className={styles.menu_left_top}><Search/></div>
          <div className={styles.menu_left_bottom}><Liked/></div>
          <div className={styles.menu_right}>Отели</div>
        </div>
      </div>
    </div>
  );
};

export default Main;