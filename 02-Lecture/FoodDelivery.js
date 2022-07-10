function foodDelivery(params) {
  let chickenMenu = Number(params[0]);
  let fishMenu = Number(params[1]);
  let veganMenu = Number(params[2]);

  let total = (chickenMenu * 10.35) + (fishMenu * 12.40) + (veganMenu * 8.15);
  let desert = total * 0.20;
  let final = total + desert + 2.50;

  console.log(final);
  
}
foodDelivery(['2', '4', '3']);