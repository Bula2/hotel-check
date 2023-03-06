import React from 'react';
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import styles from "./auth-form.module.scss";
import cx from "classnames";
import Button from "../../common/button";
import bcrypt from "bcryptjs";
import {useDispatch} from "react-redux";
import {authUser} from "../../../redux/authReducer";

const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <Formik initialValues={{
      email: "",
      password: "",
    }} onSubmit={async (values) => {
      const hashPassword = await bcrypt.hash(values.password, 10);
      dispatch(authUser({...values, password: hashPassword}))
      localStorage.setItem('email', JSON.stringify(values.email))
      localStorage.setItem('password', JSON.stringify(hashPassword))
      await navigate("/main");
    }}>
      {({errors, touched}) => (
        <Form className={styles.form}>
          <div className={styles.title}>
            Simple Hotel Check
          </div>
          <div className={cx(styles.field)}>
            <label className={cx(styles.label, errors.email && touched.email && styles.red)}
                   htmlFor="email">Логин</label>
            <Field
              id="email"
              name="email"
              validate={validateEmail}
              className={cx(styles.input, errors.email && touched.email && styles.red)}>
            </Field>
            {errors.email && touched.email && (
              <div className={styles.errors}>{errors.email}</div>
            )}
          </div>

          <div className={styles.field}>
            <label className={cx(styles.label, errors.password && touched.password && styles.red)}
                   htmlFor="password">Пароль</label>
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
  );
};

export default AuthForm;