import IncomingMessage from "./IncomingMessage";
import IParser from "./IParser";

export default abstract class MessageEvent implements IParser {
  abstract parse(message: IncomingMessage): void;
  
  /**
   * Handles the logic of the message event.
   * Precondition: parse() method has been called before
   * executing this method.
   */
  abstract handle(): void;
}