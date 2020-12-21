import AuthenticationOKEvent from "./incoming/handshake/AuthenticationOKEvent";
import PingEvent from "./incoming/handshake/PingEvent";
import IMessageEventHandler from "./incoming/IMessageEventHandler";
import Incoming from "./incoming/Incoming";

export default class PacketManager {
  private _events : Map<number, IMessageEventHandler>;

  constructor() {
    this._events = new Map();
    this.registerEvents();
  }

  private registerEvents(): void {
    this._events.set(Incoming.PingEvent, new PingEvent())
    this._events.set(Incoming.AuthenticationOKEvent, new AuthenticationOKEvent());
  }

  public get events(): Map<number, IMessageEventHandler> {
    return this._events;
  }
}