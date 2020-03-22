import React, { useMemo, useContext } from "react";
import { observer } from "mobx-react-lite";
import RootContext, { RootStore } from "../../stores/rootStore";
import { Label } from "../reusable/Label/Label.component";
import { Letter } from "../reusable/Letter/Letter.component";
import styles from "./Card.module.scss";

type DivElement = React.ReactElement<HTMLDivElement>;
type DivElementArray = DivElement[];

const Card: React.FC = () => {
  const { displayStore } = useContext<RootStore>(RootContext);
  const { transformCardNumber } = displayStore;

  const renderCardNumber = useMemo(() => {
    const elementArr: DivElementArray = [];

    for (let i = 0; i < 4; i++) {
      const quarterNumHolder: DivElementArray = transformCardNumber
        .slice(i * 4, i * 4 + 4)
        .split("")
        .map((value, i) => <Letter key={i} value={value} />);

      const quarterElement: DivElement = (
        <div className={styles.quarterHolder} key={i}>
          {quarterNumHolder}
        </div>
      );

      elementArr.push(quarterElement);
    }

    return elementArr;
  }, [transformCardNumber]);

  const frontCard = useMemo(
    () => (
      <div
        className={`${styles.cardPlaceholder} ${styles.frontCardGrid} ${styles.img1}`}
      >
        <div className={`${styles.chipPlaceHolder} ${styles.chip}`}></div>
        <div className={`${styles.typeHolder} ${styles.mastercard}`}></div>
        <div className={styles.number}>
          <div className={styles.numberHolder}>{renderCardNumber}</div>
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
    [renderCardNumber]
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

export default observer(Card);
