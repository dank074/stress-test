import ByteBuffer from 'bytebuffer';
import EvaWireFrame from "../EvaWireFrame";

export default class OutgoingMessage extends EvaWireFrame {
  constructor(header: number) {
    super(header);
    this.appendInt(-1);
    this.appendShort(this.header);
  }

  public appendString(value: string): void {
    let length = ByteBuffer.calculateUTF8Bytes(value);
    this.appendShort(length);
    this.content.writeString(value);
  }

  public appendShort(value: number): void {
    this.content.writeShort(value);
  }

  public appendInt(value: number): void {
    this.content.writeInt(value);
  }
}