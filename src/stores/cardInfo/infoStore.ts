import { RootStore } from "../rootStore";
import { observable } from "mobx";

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
}
