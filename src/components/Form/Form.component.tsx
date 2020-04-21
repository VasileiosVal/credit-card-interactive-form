import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Input } from "../reusable/Input/Input.component";
import { Select } from "../reusable/Select/Select.component";
import { Label } from "../reusable/Label/Label.component";
import RootContext, { RootStore } from "../../stores/rootStore";
import { inputMouseType } from "../../utils/reusableTypes";
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
    handleChange,
    handleFocus
  } = infoStore;

  const stopHighlightGlobal = (e: inputMouseType) => e.stopPropagation();

  return (
    <div className={styles.cardForm}>
      <Input
        label="Card Number"
        name="formNumber"
        value={formNumber}
        onClick={stopHighlightGlobal}
        onChange={handleChange}
        onFocus={handleFocus}
        addContainerStyles={["formGroup"]}
        addLabelStyles={["label"]}
        addInputStyles={["inputElement", "hoverFaint"]}
        data-testid="formNumber"
      />
      <Input
        label="Card Holder"
        name="formName"
        value={formName}
        onClick={stopHighlightGlobal}
        onChange={handleChange}
        onFocus={handleFocus}
        addContainerStyles={["formGroup"]}
        addLabelStyles={["label"]}
        addInputStyles={["inputElement", "hoverFaint"]}
        data-testid="formName"
      />
      <div className={styles.inlineFormGroup}>
        <div className={styles.outerSelectGroup}>
          <Label label="Expiration Date" addLabelStyles={["label"]} />
          <div className={styles.innerSelectGroup}>
            <Select
              name="formMonth"
              value={formMonth}
              disabled={monthOptions[0]}
              onClick={stopHighlightGlobal}
              onChange={handleChange}
              onFocus={handleFocus}
              data={monthOptions}
              addSelectStyles={["selectElement", "hoverFaint"]}
              data-testid="formMonth"
            />
            <Select
              name="formYear"
              value={formYear}
              disabled={yearOptions[0]}
              onClick={stopHighlightGlobal}
              onChange={handleChange}
              onFocus={handleFocus}
              data={yearOptions}
              addSelectStyles={["selectElement", "hoverFaint"]}
              data-testid="formYear"
            />
          </div>
        </div>
        <Input
          label="CVV"
          name="formCvv"
          value={formCvv}
          onClick={stopHighlightGlobal}
          onChange={handleChange}
          onFocus={handleFocus}
          addContainerStyles={["formGroup"]}
          addLabelStyles={["label"]}
          addInputStyles={["inputElement", "hoverFaint"]}
          data-testid="formCvv"
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
