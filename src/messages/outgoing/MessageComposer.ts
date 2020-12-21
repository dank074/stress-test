import ISerialize from "./ISerialize";
import OutgoingMessage from "./OutgoingMessage";

export default abstract class MessageComposer implements ISerialize {
  abstract serialize(message: OutgoingMessage): void;
  abstract getHeader(): number;

  public getMessage(): OutgoingMessage {
    const message = new OutgoingMessage(this.getHeader());
    this.serialize(message);
    
    //set packet length
    message.content.writeInt(message.content.offset - 4, 0);
    message.content.flip();
    return message;
  }
}