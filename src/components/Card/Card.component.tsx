import React, { useState, useMemo } from "react";
import styles from "./Card.module.scss";
import { Label } from "../reusable/Label/Label.component";

type SpanElementArray = React.ReactElement<HTMLDivElement>[];

export const Card: React.FC = () => {
  const [numberHolder, setNumberHolder] = useState<string[]>(
    Array(16).fill("#")
  );

  const generateNumberHolder = useMemo((): SpanElementArray => {
    const elementArr: SpanElementArray = [];
    const arrayToHandle = [...numberHolder];
    for (let i = 0; i < 4; i++) {
      const quarterNumHolder = arrayToHandle.splice(0, 4);
      const quarterElement = <div key={i}>{quarterNumHolder.join("")}</div>;
      elementArr.push(quarterElement);
    }
    return elementArr;
  }, [numberHolder]);

  const frontCard = useMemo(
    () => (
      <div
        className={`${styles.cardPlaceholder} ${styles.frontCardGrid} ${styles.img1}`}
      >
        <div className={`${styles.chipPlaceHolder} ${styles.chip}`}></div>
        <div className={`${styles.typeHolder} ${styles.mastercard}`}></div>
        <div className={styles.number}>
          <div className={styles.numberHolder}>{generateNumberHolder}</div>
        </div>
        <div className={styles.nameContainer}>
          <Label label="Card Holder" addLabelStyles={["nameLabel"]} />
          <div className={styles.name}>Full Name</div>
        </div>
        <div className={styles.expireContainer}>
          <Label label="Expires" addLabelStyles={["nameLabel"]} />
          <div className={styles.expire}>mm/yy</div>
        </div>
      </div>
    ),
    [generateNumberHolder]
  );

  const backCard = useMemo(
    () => (
      <div
        className={`${styles.cardPlaceholder} ${styles.backCardGrid} ${styles.img1} ${styles.cardRotate}`}
      >
        <div className={styles.line}></div>
        <div className={styles.cvvContainer}>
          <Label label="CVV" addLabelStyles={["cvvLabel"]} />
          <div className={styles.cvvOutput}>553</div>
        </div>
        <div className={`${styles.backTypeHolder} ${styles.mastercard}`}></div>
      </div>
    ),
    []
  );

  return (
    <div className={styles.cardOuterContainer}>
      <div className={`${styles.cardInnerContainer}`}>
        {frontCard}
        {backCard}
      </div>
    </div>
  );
};
