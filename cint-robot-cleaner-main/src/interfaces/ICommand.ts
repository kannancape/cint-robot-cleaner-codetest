import { Direction } from "../models/Direction";

export interface ICommand {
  direction: Direction;
  steps: number;
}
