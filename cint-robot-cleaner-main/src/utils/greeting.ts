var figlet = require("figlet");

export const Greeting = () => {
  figlet("Cint Robot Cleaner", function (err: any, data: any) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
    console.log("Please enter your inputs as below:");
    console.log("| - A single integer that represents the number of commands!");
    console.log(
      "| - Two integer numbers that represents the starting coordinates!"
    );
    console.log(
      "| - The third, and any subsequent, two pieces of data. The Direction (N,E,S,W) and steps(0-100,000)!\n\n"
    );
  });
};
