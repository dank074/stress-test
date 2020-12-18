import MessageComposer from "../MessageComposer";
import OutgoingMessage from "../OutgoingMessage";

export default class PongComposer extends MessageComposer {
  serialize(message: OutgoingMessage): void {
    //nothing, empty message
  }
  getHeader(): number {
    throw new Error("Method not implemented.");
  }
}