import ByteBuffer from 'bytebuffer';
import App from '../App';
import IncomingMessage from '../messages/incoming/IncomingMessage';
import ClientHelloComposer from '../messages/outgoing/handshake/ClientHelloComposer';
import MessageComposer from '../messages/outgoing/MessageComposer';
import PacketManager from "../messages/PacketManager";

export default class WebSocketConnection {
  private _socket: WebSocket;
  private _packetManager: PacketManager;

  constructor(url: string, packetManager: PacketManager) {
    this._packetManager = packetManager;
    this._socket = new WebSocket(url);
    this._socket.binaryType = 'arraybuffer';
    this._socket.onopen = this.onOpen;
    this._socket.onclose = this.onClose;
    this._socket.onmessage = this.onMessage;
    this._socket.onerror = this.onError;
  }

  private onOpen(): void {
    App.instance.connection.sendMessage(new ClientHelloComposer());
  }

  private onClose(): void {
    console.log("connection closed");
  }

  private onMessage(event: MessageEvent): void {
    let buffer = ByteBuffer.wrap(event.data);
    if(buffer.remaining() < 6) return;

    let length = buffer.readInt();
    let header = buffer.readShort();
    if(App.instance.connection.packetManager.events.get(header)) {
      App.instance.connection.packetManager.events.get(header)!.parse(new IncomingMessage(header, buffer));// todo: separate parsing and handling logic
    } else {
      console.log(`unsupported message: ${event.data}`);
    }
  }

  private onError(event: Event): void {
    console.log(event);
  }

  public sendMessage<T extends MessageComposer>(msg: T): void {
    if (this._socket.readyState != WebSocket.OPEN) return;
    this._socket.send(msg.getMessage().content.toBuffer());
  }

  public get packetManager(): PacketManager {
    return this._packetManager;
  }
}