function basketBall(param) {
  let yearTax = Number(param[0]);

  let sneakers = yearTax - (yearTax * 0.40);
  let gear = sneakers - (sneakers * 0.20);
  let balls = gear / 4;
  let accessories = balls / 5; 

  let total = yearTax + sneakers + gear + balls +accessories;
  console.log(total);
}
basketBall(['365']);