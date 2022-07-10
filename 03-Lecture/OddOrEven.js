function oddOrEven(params) {
  let num = Number(params[0]);
  if (num % 2 == 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
oddOrEven(['2'])