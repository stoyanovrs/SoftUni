function depositCalc(params) {
  let deposit = Number(params[0]);
  let month = Number(params[1]);
  let rate = Number(params[2]);

  let totalForYear = deposit * (rate / 100);
  let rateForMonth = totalForYear / 12;
  let final = deposit + (month * rateForMonth);
  
  console.log(final);
}
depositCalc(['200', '3', '5.7']);