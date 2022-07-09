function projects(params) {
  let name = params[0];
  let num = Number(params[1]);
  console.log(`The architect ${name} will need ${num * 3} hours to complete ${num} project/s.`);
}
projects(["George", "4"]);