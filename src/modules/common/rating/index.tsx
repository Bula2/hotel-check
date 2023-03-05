import React from 'react';
import styles from "./rating.module.scss"

export interface IRating {
  stars: number;
}

const Rating: React.FC<IRating> = ({stars}) => {
  const data = new Array(5)
  return (
    <div className={styles.wrapper}>
      <div>
        {stars >= 1
          ? <img src={"/images/y-star.svg"} alt={"star"}/>
          : <img src={"/images/g-star.svg"} alt={"star"}/>}
      </div>
      <div>
        {stars >= 2
          ? <img src={"/images/y-star.svg"} alt={"star"}/>
          : <img src={"/images/g-star.svg"} alt={"star"}/>}
      </div>
      <div>
        {stars >= 3
          ? <img src={"/images/y-star.svg"} alt={"star"}/>
          : <img src={"/images/g-star.svg"} alt={"star"}/>}
      </div>
      <div>
        {stars >= 4
          ? <img src={"/images/y-star.svg"} alt={"star"}/>
          : <img src={"/images/g-star.svg"} alt={"star"}/>}
      </div>
      <div>
        {stars >= 5
          ? <img src={"/images/y-star.svg"} alt={"star"}/>
          : <img src={"/images/g-star.svg"} alt={"star"}/>}
      </div>
    </div>
  );
};

export default Rating;