// 3.1

let int1 = 70;
let int2 = 27;

let result = (num1, num2) => Math.round(num1 / num2).toFixed(3);

console.log(result(int1, int2));

//

// 3.2

let farenInput = document.getElementById("inputF");
let celsius = document.getElementById("celsius");

let fahrenheitToCelsius = () => {
  let farenInputParse = parseFloat(farenInput.value);
  let changed = ((farenInputParse - 32) * 5) / 9;
  celsius.innerHTML = changed.toFixed(0);
};

//

// 3.3
let str1 = prompt("შემოიტანეთ პირველი სიტყვა");
let str2 = prompt("შემოიტანეთ მეორე სიტყვა");

let result2 = "";

let include = (str1, str2) => {
  if (str1.includes(str2)) {
    result2 = true;
  } else {
    result2 = false;
  }
};

include(str1, str2);
alert(`შეიცავს თუ არა პირველი სიტყვა მეორეს: ${result2}`);

//

// 3.4
let num3 = parseInt(prompt("შემოიტანეთ პირველი ციფრი"));
let num4 = parseInt(prompt("შემოიტანეთ მეორე ციფრი"));
let result3 = "";

let mathPow = (a, b) => (result3 = Math.pow(a, b));

mathPow(num3, num4);
alert(result3);

//

// 3.5

let multiplication = (x, y) => x * y;
