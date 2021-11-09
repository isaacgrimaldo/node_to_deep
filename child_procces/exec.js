/// child_process.exec(command , {options} , {callback});

const child_process = require("child_process");

const progs = {
  list: "dir .",
  remove: "DEL /F /A init.ps1",
};

const child = child_process.exec(
  progs.remove,
  { cwd: process.cwd() },
  (err, stdout, stderr) => {
    if (err)
      throw new Error(
        "ErrorMessage: " + err.message + "ErrorName :" + err.name
      );

    console.log(stderr);
    console.log(stdout);
  }
);

const ls = child_process.exec(
  progs.list,
  { cwd: process.cwd() },
  (err, stdout, stderr) => {
    if (err)
      throw new Error(
        "ErrorMessage: " + err.message + "ErrorName :" + err.name
      );

    console.log(stderr);
    console.log(stdout);
  }
);
