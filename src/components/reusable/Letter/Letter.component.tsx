import React from "react";
import { useAnimation } from "../CustomHooks/useAnimation";
import styles from "./Letter.module.scss";

interface Props {
  value: string;
  animate: string;
}

export const Letter: React.FC<Props> = ({ value, animate }) => {
  const animateClass = (value: string, animate: string) => {
    switch (animate) {
      case "number":
        return value === "#" ? styles.valueLeave : styles.valueEnter;

      case "name":
        return styles.valueJoinRight;

      case "initial-name":
        return styles.valueEnter;

      case "date":
        return Number.isInteger(parseInt(value))
          ? styles.valueEnter
          : styles.valueLeave;

      default:
        return "";
    }
  };

  const animation = useAnimation([value, animate], animateClass);

  return (
    <div className={animation}>
      {value === " " ? <span>&nbsp;</span> : value}
    </div>
  );
};
