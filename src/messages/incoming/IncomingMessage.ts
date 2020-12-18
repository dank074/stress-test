import ByteBuffer from 'bytebuffer';
import EvaWireFrame from "../EvaWireFrame";

export default class IncomingMessage extends EvaWireFrame {
  constructor(header: number, buffer: ByteBuffer) {
    super(header, buffer);
  }

  public readShort(): number {
    return this.content.readShort();
  }

  public readInt(): number {
    return this.content.readInt();
  }

  public readBoolean(): boolean {
    return this.content.readByte() === 1;
  }

  public readString(): string {
    let length = this.readShort();
    return this.content.readString(length, ByteBuffer.METRICS_BYTES);
  }
}