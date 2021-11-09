"use strict";

// child_process.execFile(file, [args] , {optiones},  callback)
const child_process = require("child_process");
const extension = process.platform;

const fileCommans = {
  linux: "./test.sh",
  win32: "./test.cmd",
};

const file = fileCommans[extension];
const args = ["/A H S", "/B"];
const options = {
  cwd: process.cwd(),
};

const terminal = child_process.execFile(
  file,
  args,
  options,
  (err, stdout, stderr) => {
    if (err) throw new Error("ERROR :" + err.message);

    console.log(stderr);
    console.log(stdout);
  }
);

terminal.on("close", () => console.log("finished the process"));
