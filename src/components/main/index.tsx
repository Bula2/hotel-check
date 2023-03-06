import React from 'react';
import styles from "./main.module.scss"
import {Link} from "react-router-dom";
import Search from "../../modules/main/search";
import Liked from "../../modules/main/liked";
import Hotels from "../../modules/main/hotels";
import {useDispatch} from "react-redux";
import {exitUser} from "../../redux/authReducer";
import Button from "../../modules/common/button";
import auth from "../auth";

const Main = () => {
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const exit = () => {
    dispatch(exitUser());
    localStorage.clear();
  }
  return (
    <div className={styles.wrapper}>
      {email && password ?
        <>
          <div className={styles.header}>
            <div className={styles.header_left}>Simple Hotel Check</div>
            <div className={styles.header_right}>
              <Link onClick={() => exit()} className={styles.header_right_link} to={"/"}>
                Выйти
                <img className={styles.header_right_link__img} src={"/images/log-out.png"} alt={"Выйти"}/>
              </Link>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.menu}>
              <div className={styles.menu_left_top}><Search/></div>
              <div className={styles.menu_left_bottom}><Liked/></div>
              <div className={styles.menu_right}><Hotels/></div>
            </div>
          </div>
        </>
        :
        <div className={styles.auth}>
          <div className={styles.auth_text}>Для начала необходимо авторизоваться</div>
          <div><Link to={"/"}><Button className={styles.auth_button} text={"Страница авторизации"}/></Link></div>
        </div>
      }
    </div>
  );
};

export default Main;