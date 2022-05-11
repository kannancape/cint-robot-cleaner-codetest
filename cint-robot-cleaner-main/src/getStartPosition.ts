// getStartPosition returns a Promise of
// the coords that the user has been typed
export function getStartPosition(): Promise<Array<number>> {
  return new Promise((resolve) => {
    process.stdin.once("data", (data) => {
      // convert input data to coords array
      const coords = data.toString().trim().split(" ");
      resolve(coords.map((coord) => Number(coord)));
    });
  });
}
