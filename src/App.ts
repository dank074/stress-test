import PacketManager from "./messages/PacketManager";
import WebSocketConnection from "./network/WebSocketConnection";

export default class App {
  private static _instance: App;
  private _connection: WebSocketConnection;

  constructor() {
    App._instance = this;
    this._connection = new WebSocketConnection("ws://localhost:2097/");
  }

  public get connection(): WebSocketConnection {
    return this._connection;
  }
  
  public static get instance(): App {
    return this._instance;
  }
}