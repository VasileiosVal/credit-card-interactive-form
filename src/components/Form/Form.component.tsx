import React from "react";
import { Input } from "../reusable/Input/Input.component";
import { Select } from "../reusable/Select/Select.component";
import { Label } from "../reusable/Label/Label.component";
import styles from "./Form.module.scss";

// *** think of new place
const monthNumbers = [
  "Month",
  ...[...Array(12).keys()].map(val => `${val + 1}`)
];

const yearNumbers = [
  "Year",
  ...[...Array(10).keys()].map(val => `${new Date().getFullYear() + val}`)
];
//***

export const Form: React.FC = () => (
  <div className={styles.cardForm}>
    <Input
      label="Card Number"
      name="number"
      value=""
      onChange={() => {}}
      onBlur={() => {}}
      onFocus={() => {}}
      addContainerStyles={["formGroup"]}
      addLabelStyles={["label"]}
      addInputStyles={["inputElement", "hoverFaint"]}
    />
    <Input
      label="Card Holder"
      name="name"
      value=""
      onChange={() => {}}
      onBlur={() => {}}
      onFocus={() => {}}
      addContainerStyles={["formGroup"]}
      addLabelStyles={["label"]}
      addInputStyles={["inputElement", "hoverFaint"]}
    />
    <div className={styles.inlineFormGroup}>
      <div className={styles.outerSelectGroup}>
        <Label label="Expiration Date" addLabelStyles={["label"]} />
        <div className={styles.innerSelectGroup}>
          <Select
            name="month"
            value="Month"
            onChange={() => {}}
            onBlur={() => {}}
            onFocus={() => {}}
            data={monthNumbers}
            addSelectStyles={["selectElement", "hoverFaint"]}
          />
          <Select
            name="year"
            value="Year"
            onChange={() => {}}
            onBlur={() => {}}
            onFocus={() => {}}
            data={yearNumbers}
            addSelectStyles={["selectElement", "hoverFaint"]}
          />
        </div>
      </div>
      <Input
        label="CVV"
        name="cvv"
        value=""
        onChange={() => {}}
        onBlur={() => {}}
        onFocus={() => {}}
        addContainerStyles={["formGroup"]}
        addLabelStyles={["label"]}
        addInputStyles={["inputElement", "hoverFaint"]}
      />
    </div>
    <Input
      type="button"
      name="submit"
      value="Submit"
      addContainerStyles={["submitGroup"]}
      addInputStyles={["submitButton", "hoverFaint"]}
    />
  </div>
);
