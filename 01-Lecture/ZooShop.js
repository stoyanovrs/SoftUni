function zooShop(params) {
  let dogFood = Number(params[0]);
  let catFood = Number(params[1]);
  let result = (catFood * 4) + (dogFood * 2.50);

  console.log(`${result} lv.`);
}
zooShop(['5', '4']);