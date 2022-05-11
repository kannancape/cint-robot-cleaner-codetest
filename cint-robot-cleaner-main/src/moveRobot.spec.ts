import { moveTheRobot, serveCommand } from "./moveRobot";
import { ICommand } from "./interfaces/ICommand";

describe("Move Robot helpers", () => {
  it("should calculate the points on the grid covered by the robot from a instruction", () => {
    const command: ICommand = { direction: "N", steps: 2 };
    const result = serveCommand(command, [0, 0]);

    expect(result).toEqual([
      [0, 1],
      [0, 2],
    ]);
  });

  it("should calculate area covered by robot for simple path", () => {
    const command: ICommand = { direction: "N", steps: 2 };
    expect(moveTheRobot([0, 0], [command])).toEqual(2);
  });

  it("should calculate area covered by robot for path revisiting places", () => {
    const command1: ICommand = { direction: "N", steps: 2 };
    const command2: ICommand = { direction: "S", steps: 1 };

    expect(moveTheRobot([0, 0], [command1, command2])).toEqual(2);
  });

  it("should calculate unique places covered by robot ", () => {
    const command1: ICommand = { direction: "N", steps: 2 };
    const command2: ICommand = { direction: "S", steps: 1 };
    const command3: ICommand = { direction: "E", steps: 1 };
    const command4: ICommand = { direction: "W", steps: 3 };

    expect(
      moveTheRobot([0, 0], [command1, command2, command3, command4])
    ).toEqual(5);
  });
});
