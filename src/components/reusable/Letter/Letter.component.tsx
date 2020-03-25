import React, { useEffect, useState } from "react";
import styles from "./Letter.module.scss";

interface Props {
  value: string;
  animate: string;
}

export const Letter: React.FC<Props> = ({ value, animate }) => {
  const [animation, setAnimation] = useState("");

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

  useEffect(() => {
    setAnimation(animateClass(value, animate));
  }, [value, animate]);

  useEffect(() => {
    animation && setTimeout(() => setAnimation(""), 200);
  }, [animation]);

  return (
    <div className={animation}>
      {value === " " ? <span>&nbsp;</span> : value}
    </div>
  );
};
