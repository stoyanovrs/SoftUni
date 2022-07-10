function radToDeg(params) {
  let radian = Number(params[0]);
  let degree = radian * 180 / Math.PI;
  console.log(degree);
}
radToDeg(['3.1416']);