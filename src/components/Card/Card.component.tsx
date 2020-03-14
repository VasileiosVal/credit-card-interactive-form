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
    <div className={styles.cardOuterContainer}>
      <div className={`${styles.cardInnerContainer}`}>
        <div className={`${styles.frontCardPlaceholder} ${styles.img1}`}>
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
            <div className={styles.expire}>mm/yy</div>
          </div>
        </div>
        <div
          className={`${styles.backCardPlaceholder} ${styles.img1} ${styles.cardRotate}`}
        >
          <div className={styles.line}></div>
          <div className={styles.cvvContainer}>
            <label className={styles.cvvLabel} htmlFor="cvv">
              cvv
            </label>
            <div className={styles.cvvOutput}>***</div>
          </div>
          <div className={styles.type}></div>
        </div>
      </div>
    </div>
  );
};
