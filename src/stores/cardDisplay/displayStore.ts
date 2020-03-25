import { RootStore } from "../rootStore";
import { observable, computed, action } from "mobx";

const cardBackgroundGallery = Array(8)
  .fill("img")
  .map((val, i) => `${val}${i + 1}`);

const initialHashCardDisplay: string = Array(16)
  .fill("#")
  .join("");

export const initialName = "Full Name";

const initialMonth = "mm";

const initialYear = "yy";

const initialCvv = "***";

export class DisplayStore {
  @observable cardFrontDisplay = true;

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

  @computed get generateCardCvv() {
    const cvv = this.rootStore.infoStore.formCvv;
    return !cvv.length ? initialCvv : cvv;
  }

  @computed get applyFlip() {
    return !this.cardFrontDisplay ? "isFlipped" : "";
  }

  @computed get cardImg() {
    return cardBackgroundGallery[
      Math.floor(Math.random() * cardBackgroundGallery.length)
    ];
  }

  @computed get cardType() {
    const number = this.rootStore.infoStore.trimmedFormNumber;

    return number.startsWith("4")
      ? "visa"
      : number.startsWith("62")
      ? "unionpay"
      : number.startsWith("6011")
      ? "discover"
      : number.startsWith("9792")
      ? "troy"
      : number.match(/^5[1-5]/)
      ? "mastercard"
      : "visa";
  }
}
