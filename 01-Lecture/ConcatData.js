function concatData(params) {
  let firstName = params[0];
  let lastName = params[1];
  let age = Number(params[2]);
  let town = params[3];
  console.log(`"You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatData(['Maria', 'Ivanova', 20, 'Sofia']);