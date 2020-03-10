import React from "react";
import { Input } from "../Input/Input.component";
import { Select } from "../Select/Select.component";
import styles from "./Form.module.scss";

export const Form: React.FC = () => (
  <div className={styles.cardForm}>
    <Input
      label="Card Number"
      name="number"
      value="number"
      onChange={() => {}}
    />
    <Input label="Card Holder" name="name" value="name" onChange={() => {}} />
    <div className={styles.inlineFormGroup}>
      <div className={styles.outerSelectGroup}>
        <label className={styles.label} htmlFor="Expiration Date">
          Expiration Date
        </label>
        <div className={styles.innerSelectGroup}>
          <Select
            name="month"
            value="month"
            onChange={() => {}}
            data={[<option value="">Month</option>]}
          />
          <Select
            name="day"
            value="day"
            onChange={() => {}}
            data={[<option value="">Day</option>]}
          />
        </div>
      </div>
      <Input
        label="CVV"
        type="text"
        name="cvv"
        value="cvv"
        onChange={() => {}}
      />
    </div>
    <div className={styles.submitGroup}>
      <button className={`${styles.submitButton} ${styles.hoverFaint}`}>
        Submit
      </button>
    </div>
  </div>
);
