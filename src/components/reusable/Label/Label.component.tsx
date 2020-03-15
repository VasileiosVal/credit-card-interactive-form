import React from "react";
import styles from "./Label.module.scss";
import { applyClasses } from "../../../utils/helperFunctions";

interface Props {
  label?: string;
  addLabelStyles?: string[];
}

const generateClasses = applyClasses(styles);

export const Label: React.FC<Props> = ({ label = "", addLabelStyles = [] }) => (
  <>
    {label && (
      <label className={generateClasses(addLabelStyles)} htmlFor={label}>
        {label}
      </label>
    )}
  </>
);
