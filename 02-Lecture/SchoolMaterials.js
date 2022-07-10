function schoolMaterials(params) {
  let pens = Number(params[0]);
  let markers = Number(params[1]);
  let cleaner = Number(params[2]);
  let discount = Number(params[3]);

  let sum = (pens * 5.80) + (markers * 7.20) + (cleaner * 1.20);
  let sumDiscount = sum * (discount / 100); 

  console.log(sum - sumDiscount);
}
schoolMaterials([
  '2',
  '3',
  '4',
  '25'
])