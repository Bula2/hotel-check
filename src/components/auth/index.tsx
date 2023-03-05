import React from 'react';
import styles from "./auth.module.scss"
import AuthForm from "../../modules/auth/auth-form";


const Auth = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}></div>
      <AuthForm/>
    </div>
  );
};

export default Auth;