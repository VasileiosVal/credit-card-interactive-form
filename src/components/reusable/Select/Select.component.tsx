import React from "react";
import { applyClasses } from "../../../utils/helperFunctions";
import styles from "./Select.module.scss";

type genOptionType = (
  data: string[]
) => React.ReactElement<HTMLOptionElement>[];

interface Props {
  name: string;
  value: string;
  onChange?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  data: string[];
  addSelectStyles?: string[];
}

const generateClasses = applyClasses(styles);

export const Select: React.FC<Props> = ({
  data,
  addSelectStyles = [],
  ...rest
}) => {
  const generateOptionElements: genOptionType = givenData =>
    givenData.map(val => (
      <option key={val} value={val}>
        {val}
      </option>
    ));

  return (
    <select className={generateClasses(addSelectStyles)} {...rest}>
      {generateOptionElements(data)}
    </select>
  );
};
