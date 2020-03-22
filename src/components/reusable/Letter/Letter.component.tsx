import React from "react";
import styles from "./Letter.module.scss";

interface Props {
  value: string;
}
export const Letter: React.FC<Props> = ({ value }) => (
  <div className={value === "#" ? styles.numLeave : styles.numEnter}>
    {value}
  </div>
);
