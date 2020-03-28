import React from "react";
import { Label } from "../Label/Label.component";
import { applyClasses } from "../../../utils/helperFunctions";
import styles from "./Input.module.scss";
import { formEl, focusEl } from "../../../stores/cardInfo/infoStore";
import { inputMouseType } from "../../Form/Form.component";

interface Props {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onClick?: (e: inputMouseType) => void;
  onChange?: (e: formEl) => void;
  onFocus?: (e: focusEl) => void;
  onBlur?: (e: focusEl) => void;
  addContainerStyles?: string[];
  addLabelStyles?: string[];
  addInputStyles?: string[];
}

const generateClasses = applyClasses(styles);

export const Input: React.FC<Props> = ({
  label = "",
  type = "text",
  addContainerStyles = [],
  addLabelStyles = [],
  addInputStyles = [],
  ...rest
}) => (
  <div className={generateClasses(addContainerStyles)}>
    <Label label={label} addLabelStyles={addLabelStyles} />
    <input className={generateClasses(addInputStyles)} type={type} {...rest} />
  </div>
);
