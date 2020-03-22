import { RootStore } from "../rootStore";
import { observable, computed } from "mobx";

const initialHashCardDisplay: string = Array(16)
  .fill("#")
  .join("");

const initialName = "Full Name";

export class DisplayStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @computed get transformCardNumber() {
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
}
