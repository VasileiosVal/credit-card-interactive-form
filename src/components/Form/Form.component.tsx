import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Input } from "../reusable/Input/Input.component";
import { Select } from "../reusable/Select/Select.component";
import { Label } from "../reusable/Label/Label.component";
import RootContext, { RootStore } from "../../stores/rootStore";
import styles from "./Form.module.scss";

const Form: React.FC = () => {
  const { infoStore } = useContext<RootStore>(RootContext);
  const {
    months,
    years,
    formCvv,
    formMonth,
    formName,
    formNumber,
    formYear
  } = infoStore;

  return (
    <div className={styles.cardForm}>
      <Input
        label="Card Number"
        name="number"
        value={formNumber}
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
        value={formName}
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
              value={formMonth}
              disabled={months[0]}
              onChange={() => {}}
              onBlur={() => {}}
              onFocus={() => {}}
              data={months}
              addSelectStyles={["selectElement", "hoverFaint"]}
            />
            <Select
              name="year"
              value={formYear}
              disabled={years[0]}
              onChange={() => {}}
              onBlur={() => {}}
              onFocus={() => {}}
              data={years}
              addSelectStyles={["selectElement", "hoverFaint"]}
            />
          </div>
        </div>
        <Input
          label="CVV"
          name="cvv"
          value={formCvv}
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
};

export default observer(Form);
