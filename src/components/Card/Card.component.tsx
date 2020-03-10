import React from "react";
import styles from "./Card.module.scss";

export const Card: React.FC = () => (
  <div className={`${styles.cardPlaceholder} ${styles.img1}`}>
    <div className={styles.chip}></div>
  </div>
);
