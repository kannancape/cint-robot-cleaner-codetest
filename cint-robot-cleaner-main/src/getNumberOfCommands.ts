// getNumberOfCommands returns a Promise of
// the number that the user has been typed
export function getNumberOfCommands(): Promise<number> {
  return new Promise((resolve) => {
    process.stdin.once("data", (data) => {
      resolve(Number(data.toString().trim()));
    });
  });
}
