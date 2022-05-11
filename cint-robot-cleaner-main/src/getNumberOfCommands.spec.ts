import { getNumberOfCommands } from "./getNumberOfCommands";

describe("getNumberOfCommands function", () => {
  let stdin: any;

  beforeEach((done) => {
    done();
    stdin = require("mock-stdin").stdin();
  });

  it("should read 2 as a number of commands", async () => {
    const expectedNumber = "2";

    process.nextTick(() => {
      stdin.send(`${expectedNumber}\r`);
    });

    const result = await getNumberOfCommands();
    expect(result).toEqual(2);
  });
});
