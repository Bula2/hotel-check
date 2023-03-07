import React from 'react';
import {Field, Form, Formik} from "formik";
import styles from "./search.module.scss";
import cx from "classnames";
import Button from "../../common/button";
import DatePicker, {registerLocale} from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import {requestHotels} from "../../../redux/hotelsReducer";
import {useDispatch} from "react-redux";
import {formatDate, formatDateFetch} from "../../../utils/formatDate";
import {addInfo} from "../../../redux/infoReducer";

registerLocale('ru', ru)
const Search = () => {
  const dispatch = useDispatch();
  dispatch(requestHotels("Москва", "2023-03-06", "2023-03-07"));
  const validateLocation = (value: string) => {
    if (!value) {
      return "Обязательное поле";
    }
  }

  const validateDaysCount = (value: number) => {
    if (!value) {
      return "Обязательное поле"
    }
  }
  const currentDay = new Date()
  return (
    <Formik initialValues={{
      location: "Москва",
      date: currentDay,
      daysCount: 1
    }} onSubmit={async (values, {resetForm}) => {
      const checkIn = formatDateFetch(values.date)
      const checkOut = values.date
      checkOut.setDate(values.date.getDate() + Number(values.daysCount))
      dispatch(requestHotels(values.location, checkIn, formatDateFetch(checkOut)));
      checkOut.setDate(values.date.getDate() - Number(values.daysCount))
      dispatch(addInfo(values.location,values.daysCount, formatDate(values.date)));
    }}>
      {({errors, touched, values, setFieldValue}) => (
        <Form className={styles.form}>
          <div className={cx(styles.field)}>
            <label className={cx(styles.label)}
                   htmlFor="email">Локации</label>
            <Field
              id="location"
              name="location"
              validate={validateLocation}
              className={cx(styles.input)}>
            </Field>
            {errors.location && touched.location && (
              <div className={styles.errors}>{errors.location}</div>
            )}
          </div>
          <div className={styles.field}>
            <label className={cx(styles.label)}
                   htmlFor="date">Дата заселения</label>
            <DatePicker
              id={"date"}
              selected={values.date}
              placeholderText="Дата заселения"
              className={cx("form-control", styles.input, styles.datePicker)}
              name="date"
              dateFormat="dd.MM.yyyy"
              todayButton="Сегодня"
              required={true}
              locale="ru"
              shouldCloseOnSelect
              onChange={date => setFieldValue('date', date)}
            />
          </div>

          <div className={styles.field}>
            <label className={cx(styles.label)}
                   htmlFor="daysCount">Количество дней</label>
            <Field
              id="daysCount"
              name="daysCount"
              validate={validateDaysCount}
              className={cx(styles.input)}>
            </Field>
            {errors.daysCount && touched.daysCount && (
              <div className={styles.errors}>{errors.daysCount}</div>
            )}
          </div>
          <div className={styles.field}>
            <Button type={"submit"} text={"Найти"} className={styles.button}/>
          </div>
        </Form>
      )}
    </Formik>
  )
};

export default Search;