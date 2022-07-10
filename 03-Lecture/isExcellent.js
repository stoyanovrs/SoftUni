function isExcellent(params) {
  let grade = Number(params[0]);
  if(grade >= 5.50){
    console.log('Excellent!');
  }
}
isExcellent(['5.49'])