function figureArea(params) {
  //square, rectangle, circle или triangle
  let figure = params[0];
  let area = '';
  if( figure == 'square') {
    let side = Number(params[1]);
    area = side * side;
    console.log(Number(area).toFixed(3));
  } else if( figure == 'rectangle') {
    let sideA = Number(params[1]);
    let sideB = Number(params[2]);
    area = sideA * sideB;
    console.log(Number(area).toFixed(3));
  } else if ( figure == 'circle') {
    let radius = Number(params[1]);
    area = 2 * Math.PI * Math.pow(radius, 2) / 2;
    console.log(Number(area).toFixed(3));
  } else if ( figure == 'triangle') {
    let length = Number(params[1]);
    let lengthHigh = Number(params[2]);
    area = length * lengthHigh / 2;
    console.log(Number(area).toFixed(3));
  }
}
figureArea(["triangle", "4.5", "20"]);