import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import RootContext, { RootStore } from "../../stores/rootStore";
import { Label } from "../reusable/Label/Label.component";
import { Letter } from "../reusable/Letter/Letter.component";
import { initialName } from "../../stores/cardDisplay/displayStore";
import { applyClasses } from "../../utils/helperFunctions";
import styles from "./Card.module.scss";

type DivElement = React.ReactElement<HTMLDivElement>;
type DivElementArray = DivElement[];

const generateClasses = applyClasses(styles);

const Card: React.FC = () => {
  const { displayStore } = useContext<RootStore>(RootContext);
  const {
    cardFrontDisplay,
    generateCardNumber,
    generateCardName,
    generateCardMonth,
    generateCardYear,
    generateCardCvv
  } = displayStore;

  const renderData = (param: string) => {
    switch (param) {
      case "number":
        return transformNumber(generateCardNumber);
      case "name":
        return transformName(generateCardName);
      case "month":
        return transformDate(generateCardMonth);
      case "year":
        return transformDate(generateCardYear);
      case "cvv":
        return transformName(generateCardCvv);
    }
  };

  const transformNumber = (givenNumber: string) => {
    const elementArr: DivElementArray = [];

    for (let i = 0; i < 4; i++) {
      const quarterNumHolder: DivElementArray = givenNumber
        .slice(i * 4, i * 4 + 4)
        .split("")
        .map((letter, i) => <Letter key={i} animate="number" value={letter} />);

      const quarterElement: DivElement = (
        <div className={styles.quarterHolder} key={i}>
          {quarterNumHolder}
        </div>
      );

      elementArr.push(quarterElement);
    }

    return elementArr;
  };

  const transformName = (givenName: string) => {
    const elementArr: DivElementArray = givenName
      .split("")
      .map((letter, i) => (
        <Letter
          key={i}
          animate={givenName === initialName ? "initial-name" : "name"}
          value={letter}
        />
      ));

    return elementArr;
  };

  const transformDate = (givenDate: string) => {
    const elementArr: DivElementArray = givenDate
      .split("")
      .map((value, i) => <Letter key={i} animate="date" value={value} />);

    return elementArr;
  };

  const frontCard = (
    <div
      className={generateClasses(["cardPlaceholder", "frontCardGrid", "img1"])}
    >
      <div className={generateClasses(["chipPlaceHolder", "chip"])}></div>
      <div className={generateClasses(["typeHolder", "mastercard"])}></div>
      <div className={styles.number}>
        <div className={styles.numberHolder}>{renderData("number")}</div>
      </div>
      <div className={styles.nameContainer}>
        <Label label="Card Holder" addLabelStyles={["nameLabel"]} />
        <div className={styles.name}>{renderData("name")}</div>
      </div>
      <div className={styles.expireContainer}>
        <Label label="Expires" addLabelStyles={["nameLabel"]} />
        <div className={styles.expire}>
          {renderData("month")}
          <span>/</span>
          {renderData("year")}
        </div>
      </div>
    </div>
  );

  const backCard = (
    <div
      className={generateClasses([
        "cardPlaceholder",
        "backCardGrid",
        "img1",
        "cardRotate"
      ])}
    >
      <div className={styles.line}></div>
      <div className={styles.cvvContainer}>
        <Label label="CVV" addLabelStyles={["cvvLabel"]} />
        <div className={styles.cvvOutput}>{renderData("cvv")}</div>
      </div>
      <div className={generateClasses(["backTypeHolder", "mastercard"])}></div>
    </div>
  );

  return (
    <div className={styles.cardOuterContainer}>
      <div
        className={`${styles.cardInnerContainer} ${!cardFrontDisplay &&
          styles.isFlipped}`}
      >
        {frontCard}
        {backCard}
      </div>
    </div>
  );
};

export default observer(Card);
