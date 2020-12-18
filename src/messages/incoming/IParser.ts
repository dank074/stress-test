import IncomingMessage from "./IncomingMessage";

export default interface IParser {
  parse(message: IncomingMessage): void;
}