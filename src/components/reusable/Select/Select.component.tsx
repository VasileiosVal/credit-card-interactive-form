import React from "react";
import { applyClasses } from "../../../utils/helperFunctions";
import styles from "./Select.module.scss";
import { formEl, focusEl, inputMouseType } from "../../../utils/reusableTypes";

type genOptionType = (
  data: string[]
) => React.ReactElement<HTMLOptionElement>[];

interface Props {
  name: string;
  value: string;
  disabled?: string;
  onClick: (e: inputMouseType) => void;
  onChange?: (e: formEl) => void;
  onFocus?: (e: focusEl) => void;
  onBlur?: (e: focusEl) => void;
  data: string[];
  addSelectStyles?: string[];
}

const generateClasses = applyClasses(styles);

export const Select: React.FC<Props> = ({
  data,
  disabled = "",
  addSelectStyles = [],
  ...rest
}) => {
  const generateOptionElements: genOptionType = givenData =>
    givenData.map(val => (
      <option key={val} value={val} disabled={val === disabled}>
        {val}
      </option>
    ));

  return (
    <select className={generateClasses(addSelectStyles)} {...rest}>
      {generateOptionElements(data)}
    </select>
  );
};
