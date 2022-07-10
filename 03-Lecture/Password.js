function password(params) {
  let input = params[0];
  let pass = 's3cr3t!P@ssw0rd';
  if (input === pass) {
    console.log('Welcome');
  } else {
    console.log('Wrong password!');
  }
}
password(['s3cr3t!P@ssw0rd']);