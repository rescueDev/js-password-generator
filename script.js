//creo variabili con maiusc, min, numbers, specials
var len;

function setDiff(diff) {
  len = diff;
  /* console.log("pressed", diff);
  console.log(len); */
  return len;
}

function generatePass() {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var numb = "0123456789";
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~'";
  var char = letters + numb + special;

  const password = [];
  var rndLetter = char[Math.floor(Math.random() * char.length)];
  let i;

  while (password.length < len) {
    var rndLetter = char[Math.floor(Math.random() * char.length)];
    //unique elements
    if (password.includes(rndLetter) == false) {
      password.push(rndLetter);
    }
    i++;
  }

  /* console.log("password is:", password); */

  //ouput password

  var finalPassword = password.join("");

  console.log("final password is: ", finalPassword);

  var risultato = document.getElementById("result");
  risultato.innerHTML = finalPassword;
}
