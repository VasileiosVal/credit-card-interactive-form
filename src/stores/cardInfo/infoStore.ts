import { RootStore } from "../rootStore";
import { observable, action } from "mobx";

export type formEl = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export type focusEl = React.FocusEvent<HTMLInputElement | HTMLSelectElement>;

const monthNumbers = [
  "Month",
  ...[...Array(12).keys()].map(val => `${val + 1 <= 9 ? 0 : ""}${val + 1}`)
];

const yearNumbers = [
  "Year",
  ...[...Array(10).keys()].map(val => `${new Date().getFullYear() + val}`)
];

export class InfoStore {
  @observable monthOptions: string[] = [...monthNumbers];
  @observable yearOptions: string[] = [...yearNumbers];
  @observable formNumber: string = "";
  @observable trimmedFormNumber: string = "";
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
          const calculatedField: string[] = [];
          const div = actualCardNumbers.length / 4;

          for (let i = 0; i < div; i++) {
            calculatedField.push(actualCardNumbers.slice(i * 4, i * 4 + 4));
          }
          this[name] = calculatedField.join("  ");
          this["trimmedFormNumber"] = calculatedField.join("");
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

  @action handleFocus = (e: focusEl): void => {
    const focusOnBackElement = e.target.name === "formCvv";
    this.rootStore.displayStore.cardFrontDisplay = !focusOnBackElement;
    this.rootStore.displayStore.highlightOnFocus = e.target.name;
  };
}
