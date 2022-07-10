function aquarium(params) {
  let length = Number(params[0]);
  let width = Number(params[1]);
  let hight = Number(params[2]);
  let percent = Number(params[3]);

  let cubic = length * width * hight;
  let liters = cubic * 0.001;
  let total = liters * (1 - (percent / 100));

  console.log(total);
}
aquarium(['85', '75', '47', '17']);