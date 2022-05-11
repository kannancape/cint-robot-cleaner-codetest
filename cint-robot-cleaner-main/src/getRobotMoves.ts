import { Direction } from "./models/Direction";
import { ICommand } from "./interfaces/ICommand";

// get robot moves
export async function getRobotMoves(numberOfCommands: number): Promise<ICommand[]> {
  let movesCommands: ICommand[] = [];
  let i = 0;

  // Read all the robot moves
  while (i < numberOfCommands) {
    const command = new Promise((resolve) => {
      process.stdin.once("data", (data) => {
        resolve(data.toString().replace("\r", ""));
      });
    });

    // wait for input
    const moveData = await command;
    const instruction = convertCommandToInstruction(moveData.toString());

    // push received instruction to robot moves
    movesCommands.push(instruction);
    i++;
  }
  return movesCommands;
}

// converting string command to instruction usign ICommand interface
function convertCommandToInstruction(command: string): ICommand {
  const instructionArray = command.split(" ");
  const instruction: ICommand = {
    direction: instructionArray[0] as Direction,
    steps: Number(instructionArray[1]),
  };
  return instruction;
}
