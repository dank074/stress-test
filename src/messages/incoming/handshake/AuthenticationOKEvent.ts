import IMessageEventHandler from "../IMessageEventHandler";
import IncomingMessage from "../IncomingMessage";

export default class AuthenticationOKEvent implements IMessageEventHandler{
  parse(message: IncomingMessage): void {
    console.log("Authenticated");
  }
}