import { createContext } from "react";
import { InfoStore } from "./cardInfo/infoStore";
import { DisplayStore } from "./cardDisplay/displayStore";

export class RootStore {
  infoStore: InfoStore;
  displayStore: DisplayStore;

  constructor() {
    this.infoStore = new InfoStore(this);
    this.displayStore = new DisplayStore(this);
  }
}

export default createContext(new RootStore());
