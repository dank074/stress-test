import MessageComposer from "../MessageComposer";
import Outgoing from "../Outgoing";
import OutgoingMessage from "../OutgoingMessage";

export default class OpenFlatConnectionComposer extends MessageComposer {
    private _roomId: number;
    private _password: string;

    constructor(roomId: number, password?: string)
    {
        super();
        this._roomId = roomId;
        this._password = password || '';
    }

    serialize(message: OutgoingMessage): void {
      message.appendInt(this._roomId);
      message.appendString(this._password);
    }
    
    getHeader(): number {
      return Outgoing.OpenFlatConnectionComposer;
    }
  }