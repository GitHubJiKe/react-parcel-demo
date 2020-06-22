import { observable, action } from "mobx";

class AppStore {
  @observable name: string = "";

  @action setName(name: string): void {
    this.name = name;
  }
}

export default new AppStore();
