import MessageComposer from "../MessageComposer";
import Outgoing from "../Outgoing";
import OutgoingMessage from "../OutgoingMessage";

export default class MoveAvatarMessageComposer extends MessageComposer {
    private _x: number
    private _y: number;

    constructor(x: number, y: number)
    {
        super();
        this._x = x;
        this._y = y;
    }

    serialize(message: OutgoingMessage): void {
      message.appendInt(this._x);
      message.appendInt(this._y);
    }
    
    getHeader(): number {
      return Outgoing.MoveAvatarMessageComposer;
    }
}