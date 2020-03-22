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
    monthOptions,
    yearOptions,
    formCvv,
    formMonth,
    formName,
    formNumber,
    formYear,
    handleChange
  } = infoStore;

  return (
    <div className={styles.cardForm}>
      <Input
        label="Card Number"
        name="formNumber"
        value={formNumber}
        onChange={handleChange}
        onBlur={() => {}}
        onFocus={() => {}}
        addContainerStyles={["formGroup"]}
        addLabelStyles={["label"]}
        addInputStyles={["inputElement", "hoverFaint"]}
      />
      <Input
        label="Card Holder"
        name="formName"
        value={formName}
        onChange={handleChange}
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
              name="formMonth"
              value={formMonth}
              disabled={monthOptions[0]}
              onChange={handleChange}
              onBlur={() => {}}
              onFocus={() => {}}
              data={monthOptions}
              addSelectStyles={["selectElement", "hoverFaint"]}
            />
            <Select
              name="formYear"
              value={formYear}
              disabled={yearOptions[0]}
              onChange={handleChange}
              onBlur={() => {}}
              onFocus={() => {}}
              data={yearOptions}
              addSelectStyles={["selectElement", "hoverFaint"]}
            />
          </div>
        </div>
        <Input
          label="CVV"
          name="formCvv"
          value={formCvv}
          onChange={handleChange}
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
