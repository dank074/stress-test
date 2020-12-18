import OutgoingMessage from "./OutgoingMessage";

export default interface ISerialize {
  serialize(message: OutgoingMessage): void;
}