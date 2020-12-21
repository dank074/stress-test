import MessageComposer from "../MessageComposer";
import Outgoing from "../Outgoing";
import OutgoingMessage from "../OutgoingMessage";

export default class ClientHelloComposer extends MessageComposer {
  serialize(message: OutgoingMessage): void {
    message.appendString("PRODUCTION-201611291003-338511768");
    message.appendString("FLASH");
    message.appendInt(1);// Client platform
    message.appendInt(0);// client device category
  }
  getHeader(): number {
    return Outgoing.ClientHelloComposer;
  }
}