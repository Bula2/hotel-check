import React from 'react';
import styles from "./auth.module.scss"
import {Field, Form, Formik} from "formik";
import cx from "classnames"
import Button from "../../modules/button";
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const navigate = useNavigate();
  const validateEmail = (value: string) => {
    if (!value) {
      return "Обязательное поле";
    } else {
      if (!/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]/.test(value)) {
        return "Введите валидный email"
      }
    }
  }

  const validatePassword = (value: string) => {
    if (!value) {
      return "Обязательное поле"
    } else {
      if (!(/[a-zA-Z0-9]{8,}/.test(value)))
        return "Пароль должен содержать не менее 8 символов (без кириллицы)"
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}></div>
      <Formik initialValues={{
        email: "",
        password: "",
      }} onSubmit={async () => {
        await navigate("/main");
      }}>
        {({errors, touched}) => (
          <Form className={styles.form}>
            <div className={styles.title}>
              Simple Hotel Check
            </div>
            <div className={cx(styles.field)}>
              <label className={cx(styles.label, errors.email && touched.email && styles.red)} htmlFor="email">Логин</label>
              <Field
                id="email"
                name="email"
                validate={validateEmail}
                label={"Tetc"}
                className={cx(styles.input, errors.email && touched.email && styles.red)}>
              </Field>
              {errors.email && touched.email && (
                <div className={styles.errors}>{errors.email}</div>
              )}
            </div>

            <div className={styles.field}>
              <label className={cx(styles.label, errors.password && touched.password && styles.red)} htmlFor="password">Пароль</label>
              <Field
                id="password"
                name="password"
                type="password"
                validate={validatePassword}
                className={cx(styles.input, errors.password && touched.password && styles.red)}>
              </Field>
              {errors.password && touched.password && (
                <div className={styles.errors}>{errors.password}</div>
              )}
            </div>
            <Button text={"Войти"} className={styles.button}/>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Auth;