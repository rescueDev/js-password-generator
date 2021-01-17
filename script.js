//creo variabili con maiusc, min, numbers, specials

function generatePass(length) {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var numb = "0123456789";
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~'";
  var char = letters + numb + special;

  const password = [];
  var rndLetter = char[Math.floor(Math.random() * char.length)];
  let i;

  while (password.length < length) {
    var rndLetter = char[Math.floor(Math.random() * char.length)];
    //unique elements
    if (password.includes(rndLetter) == false) {
      password.push(rndLetter);
    }
    i++;
  }

  console.log("password is:", password);

  //ouput password

  var finalPassword = password.join("");

  console.log("final password is: ", finalPassword);
}

//invokig function with value
generatePass(10);
