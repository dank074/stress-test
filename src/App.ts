export default class App {
  private static _instance: App;

  constructor() {
    App._instance = this;
  }

  public static get instance(): App {
    return this._instance;
  }
}