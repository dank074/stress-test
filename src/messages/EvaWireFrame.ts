import ByteBuffer from 'bytebuffer';

export default abstract class EvaWireFrame {
  private _header: number;
  private _content: ByteBuffer;

  constructor(header: number, buffer?: ByteBuffer) {
    this._header = header;
    this._content = buffer ? buffer : new ByteBuffer(6);
  }

  public get header(): number {
    return this._header;
  }

  public get content(): ByteBuffer {
    return this._content;
  }
}