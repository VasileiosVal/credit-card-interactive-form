import { RootStore } from "../rootStore";
import { observable, computed } from "mobx";

const initialHashCardDisplay: string = Array(16)
  .fill("#")
  .join("");

export const initialName = "Full Name";

const initialMonth = "mm";

const initialYear = "yy";

export class DisplayStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @computed get generateCardNumber() {
    const actualCardNumber = this.rootStore.infoStore.trimmedFormNumber;

    if (!actualCardNumber.length) return initialHashCardDisplay;

    const digits = actualCardNumber.slice();
    const remainingHash = initialHashCardDisplay.slice(
      digits.length,
      initialHashCardDisplay.length
    );
    const evaluatedCardNumber = `${digits}${remainingHash}`;
    return evaluatedCardNumber;
  }

  @computed get generateCardName() {
    const name = this.rootStore.infoStore.formName.trim();
    if (!name.length) return initialName;

    const evaluatedName = name
      .split(" ")
      .filter(val => val !== "")
      .join(" ");

    return evaluatedName;
  }

  @computed get generateCardMonth() {
    const month = this.rootStore.infoStore.formMonth;
    return month === "Month" ? initialMonth : month;
  }

  @computed get generateCardYear() {
    const year = this.rootStore.infoStore.formYear;
    return year === "Year" ? initialYear : year.slice(2, 4);
  }
}
