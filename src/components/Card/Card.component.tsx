import React, { useState } from "react";
import styles from "./Card.module.scss";

type SpanElementArray = React.ReactElement<HTMLSpanElement>[];

export const Card: React.FC = () => {
  const [numberHolder, setNumberHolder] = useState<string[]>([
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#"
  ]);

  const generateNumberHolder = (): SpanElementArray => {
    const elementArr: SpanElementArray = [];
    const arrayToHandle = [...numberHolder];
    for (let i = 0; i < 4; i++) {
      const quarterNumHolder = arrayToHandle.splice(0, 4);
      const quarterElement = <div key={i}>{quarterNumHolder.join("")}</div>;
      elementArr.push(quarterElement);
    }
    return elementArr;
  };

  return (
    <div className={`${styles.cardPlaceholder} ${styles.img1}`}>
      <div className={styles.chip}></div>
      <div className={styles.type}></div>
      <div className={styles.number}>
        <div className={styles.numberHolder}>{generateNumberHolder()}</div>
      </div>
      <div className={styles.nameContainer}>
        <label className={styles.nameLabel} htmlFor="Card Holder">
          Card Holder
        </label>
        <div className={styles.name}>Full Name</div>
      </div>
      <div className={styles.expireContainer}>
        <label className={styles.nameLabel} htmlFor="Expires">
          Expires
        </label>
        <div className={styles.expire}>MM/YY</div>
      </div>
    </div>
  );
};
