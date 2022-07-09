function gardening(params) {
  let area = Number(params[0]);
  let total = area * 7.61;
  let discount = total * 0.18;
  console.log(`The final price is: ${total - discount} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
gardening(['550']);