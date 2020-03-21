import React from "react";
import { RootStore } from "../rootStore";
import { observable, action, computed } from "mobx";

export type formEl = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

const monthNumbers = [
  "Month",
  ...[...Array(12).keys()].map(val => `${val + 1 <= 9 ? 0 : ""}${val + 1}`)
];

const yearNumbers = [
  "Year",
  ...[...Array(10).keys()].map(val => `${new Date().getFullYear() + val}`)
];

export class InfoStore {
  @observable months: string[] = [...monthNumbers];
  @observable years: string[] = [...yearNumbers];
  @observable formNumber: string = "";
  @observable formName: string = "";
  @observable formMonth: string = "Month";
  @observable formYear: string = "Year";
  @observable formCvv: string = "";

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action handleChange = (e: formEl): void => {
    const { name, value } = e.target;
    const regx = /^-?[0-9]+$/;

    switch (name) {
      case "formNumber":
        const actualCardNumbers = value.split("  ").join("");
        if (
          (regx.test(actualCardNumbers) || !actualCardNumbers) &&
          !(actualCardNumbers.length > 16)
        ) {
          const div = actualCardNumbers.length / 4;
          if (!div) {
            this[name] = actualCardNumbers;
          } else {
            const calculatedField: string[] = [];
            for (let i = 0; i < div; i++) {
              calculatedField.push(actualCardNumbers.slice(i * 4, i * 4 + 4));
            }
            this[name] = calculatedField.join("  ");
          }
        }
        break;
      case "formName":
      case "formMonth":
      case "formYear":
        this[name] = value;
        break;

      case "formCvv":
        if ((regx.test(value) || !value) && !(value.length > 3)) {
          this[name] = value;
        }
        break;
    }
  };
}
