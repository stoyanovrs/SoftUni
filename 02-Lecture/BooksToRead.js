function booksToRead(params) {
  let pages = Number(params[0])
  let forHour = Number(params[1])
  let days = Number(params[2])

  let readSpeed = pages / forHour;
  let daysNeed = readSpeed / days;
  console.log(daysNeed);
}
booksToRead(['212', '20', '2']);