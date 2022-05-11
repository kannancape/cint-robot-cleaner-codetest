import { ICommand } from "./interfaces/ICommand";

export function moveTheRobot(
  startPosition: number[],
  moveInstructions: Array<ICommand>
): number {
  const cleanedPlaces: number[][] = [];
  let coords = startPosition;

  moveInstructions.forEach((command) => {
    const placesVisited = serveCommand(command, coords);
    placesVisited.forEach((place) => {
      if (
        !cleanedPlaces.find(
          (findPlace) => findPlace[0] === place[0] && findPlace[1] == place[1]
        )
      ) {
        cleanedPlaces.push(place);
      }
      coords = place;
    });
  });
  return cleanedPlaces.length;
}

export function serveCommand(command: ICommand, startPosition: number[]): number[][] {
  const path: number[][] = [];
  let coords = startPosition;

  let i = 0;
  while (i < command.steps) {
    switch (command.direction) {
      case "N":
        path.push([coords[0], coords[1] + 1]);
        break;
      case "S":
        path.push([coords[0], coords[1] - 1]);
        break;
      case "E":
        path.push([coords[0] + 1, coords[1]]);
        break;
      case "W":
        path.push([coords[0] - 1, coords[1]]);
        break;
    }
    coords = path[path.length - 1];
    i++;
  }
  return path;
}
