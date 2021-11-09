// child_process.spawn = (command, [args], {options})
const child_process = require("child_process");
const os = require("os");
const sys = os.type(); // get the  OS

const consoleCommand = {
  Windows_NT: "powershell" || "cmd",
};

const commands = {
  list: "ls",
  copy: "cp",
  folder: "mkdir",
  nmp: "npm",
};

const cp = child_process.spawn(consoleCommand[sys], ["/c", commands.list], {
  cwd: "..",
});

cp.stdout.on("data", (data) => {
  console.log("Salida");
  console.log(data.toString());
});

cp.stdout.on("error", (data) => {
  console.log("Salida");
  console.log(data.toString());
});

cp.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

const copy = child_process.spawn(consoleCommand[sys], [
  commands.copy,
  "spawn.js",
  "spawn1.js",
]);

copy.on("exit", () => {
  console.log("copy finished");
});
