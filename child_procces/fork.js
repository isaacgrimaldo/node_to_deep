// child_process.fork = (modulePath , [args], {options})

const child_process = require("child_process");
const name = ["pedro", "emlisa", "isaac"];
const path = require("path");
const modulePath = path.join(__dirname, "./modules", "program1");

const data = child_process.fork(modulePath, name, {});

data.on("exit", (code, single) => {
  console.log(single, code);
});
