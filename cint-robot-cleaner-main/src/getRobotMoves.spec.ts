import { getRobotMoves } from "./getRobotMoves";

describe("getRobotMoves function", () => {
  let stdin: any;
  beforeEach((done) => {
    done();
    stdin = require("mock-stdin").stdin();
  });

  it("should receive a move as a command instruction", async () => {
    const expectedMove = "W 5";

    process.nextTick(() => {
      stdin.send(`${expectedMove}\r`);
    });

    const result = await getRobotMoves(1);
    expect(result).toEqual([
      {
        direction: "W",
        steps: 5,
      },
    ]);
  });

  it("should receive a list of moves as a command instructions", async () => {
    // jest.setTimeout(30000);

    const move1 = "W 5";
    const move2 = "N 2";

    process.nextTick(() => {
      stdin.send(`${move1}\r`);
    });

    // TODO: Change this setTimeout helper to act as a process operation
    setTimeout(() => {
      stdin.send(`${move2}\r`);
    }, 500);

    const result = await getRobotMoves(2);
    expect(result).toEqual([
      {
        direction: "W",
        steps: 5,
      },
      {
        direction: "N",
        steps: 2,
      },
    ]);
  });
});
