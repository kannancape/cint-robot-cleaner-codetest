import { getStartPosition } from "./getStartPosition";

describe("getStartPosition function", () => {
  let stdin: any;
  beforeEach((done) => {
    done();
    stdin = require("mock-stdin").stdin();
  });
  it("should return array with length equal 2", async () => {
    const expectedArray = "1 1";

    process.nextTick(() => {
      stdin.send(`${expectedArray}\r`);
    });

    const result = await getStartPosition();
    expect(result).toHaveLength(2);
  });

  it("should return array of start position equal 2 2", async () => {
    const expectedArray = "2 2";

    process.nextTick(() => {
      stdin.send(`${expectedArray}\r`);
    });

    const result = await getStartPosition();
    expect(result).toEqual([2, 2]);
  });
});
