import React from "react";
import styles from "./Select.module.scss";

interface Props {
  name: string;
  value: string;
  onChange(): void;
  data: React.ReactElement<HTMLSelectElement>[];
}

export const Select: React.FC<Props> = ({ data, ...rest }) => (
  <select className={`${styles.selectElement} ${styles.hoverFaint}`} {...rest}>
    {data}
  </select>
);
