import MessageComposer from "../MessageComposer";
import Outgoing from "../Outgoing";
import OutgoingMessage from "../OutgoingMessage";

export default class PongComposer extends MessageComposer {
  serialize(message: OutgoingMessage): void {
    //nothing, empty message
  }
  getHeader(): number {
    return Outgoing.PongComposer;
  }
}