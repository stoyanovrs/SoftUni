function rePainting(param) {

  let nylon = Number(param[0]);
  let paint = Number(param[1]);
  let amb = Number(param[2]);
  let jobDone = Number(param[3]);

  let total = (
    ((nylon + 2) * 1.50) +
    ((paint + (paint * 0.10)) * 14.50) +
    (amb * 5.00) + 0.40);
  let workers = (total * 0.30) * jobDone;  
  console.log(total + workers);  
}
rePainting(['10', '11', '4', '8']);