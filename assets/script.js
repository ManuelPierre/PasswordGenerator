// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // get choices from user and return password
  var upperAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var lowerAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var numb = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specChar = [
    "!",
    "@",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "=",
    "[",
    "]",
    "'",
    "<",
    ">",
    "?",
    "/",
  ];

  var length = parseInt(
    prompt("Specify the number of characters your password should have")
  );

  var password = "";

  if (isNaN(length) === true) {
    console.log("test");
    alert("Password requires a number");
    return;
  }

  if (length < 8) {
    alert("Password required to be no less than 8 characters");
    return;
  }

  if (length > 128) {
    alert("Password length must be no more than 128 characters");
    return;
  }

  var reqNum = confirm("Select Ok to fulfill requirements of Numbers");
  var reqLowerCase = confirm(
    "Select Ok to fulfill requirements of having a Lower case Letter!"
  );
  var reqSpecChar = confirm(
    "Select Ok to fulfill requirements of special characters!"
  );
  var reqUpperCase = confirm(
    "Select Ok to fulfill requirements of having a upper case letter!"
  );

  if (
    reqNum === false &&
    reqLowerCase === false &&
    reqSpecChar === false &&
    reqUpperCase === false
  ) {
    alert(
      "Your password must include atleast one number, lowwercase letter, uppercase letter, and a special character!"
    );
    return;
  }

  var passwordText = {
    length: length,
    reqUpperCase: reqUpperCase,
    reqLowerCase: reqLowerCase,
    reqNum: reqNum,
    reqSpecChar: reqSpecChar,
  };

  var options = [upperAlpha, lowerAlpha, numb, specChar];

  for (var i = 0; i < passwordText.length; i++) {
    if (i < 4) {
      password += options[i][Math.floor(Math.random() * options[i].length)];
      console.log(password);
    } else {
      var randIndex = Math.floor(Math.random() * options.length);
      password +=
        options[randIndex][
          Math.floor(Math.random() * options[randIndex].length)
        ];
    }
  }

  console.log(password);
  console.log(passwordText);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
