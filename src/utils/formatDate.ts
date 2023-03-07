const month = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'ноября',
  'декабря',
];

export const formatDate = (date: Date) => {
  let dd: number | string = date.getDate();
  if (dd < 10) dd = '0' + dd;

  const mm: number = date.getMonth();

  const yy: number | string = date.getFullYear();

  return dd + ' ' + month[mm] + ' ' + yy;
}

export const formatDateFetch = (date: Date) => {
  let dd: number | string = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm: number | string = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  const yy: number | string = date.getFullYear();

  return yy + '-' + mm + '-' + dd;
}