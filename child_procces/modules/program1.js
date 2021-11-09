const args = process.argv.slice(2);

args.forEach((arg) => {
  process.send("Getting: " + arg);
});

console.log(args);
