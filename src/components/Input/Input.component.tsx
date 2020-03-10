import React from "react";
import styles from "./Input.module.scss";

interface Props {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange(): void;
  onBlur?: () => void;
}

export const Input: React.FC<Props> = ({ label, type = "text", ...rest }) => (
  <div className={styles.formGroup}>
    <label className={styles.label} htmlFor={label}>
      {label}
    </label>
    <input
      className={`${styles.inputElement} ${styles.hoverFaint}`}
      type={type}
      {...rest}
    />
  </div>
);
