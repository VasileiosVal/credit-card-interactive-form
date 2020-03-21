import { createContext } from "react";
import { InfoStore } from "./cardInfo/infoStore";

export class RootStore {
  infoStore: InfoStore;

  constructor() {
    this.infoStore = new InfoStore(this);
  }
}

export default createContext(new RootStore());
