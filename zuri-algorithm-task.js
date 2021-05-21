//Number 1

const convertFahrToCelsius = (farenheitValue) => {
  const valueType = typeof farenheitValue;
  if (valueType === typeof 0 || valueType === typeof "0") {
    const celcius = ((farenheitValue - 32) * 5) / 9;
    return celcius;
  } else {
    return `${farenheitValue} is not a valid number but a/an ${valueType}.`;
  }
};

// Tests
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("8"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));

console.log("/--------------------------------/");
console.log("SPACE");
console.log("/--------------------------------/");
// Number 2
const checkYuGiOh = (n) => {
  if (isNaN(n)) {
    return `invalid parameter: ${n}`;
  }
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 0 && array[j] % 3 === 0 && array[j] % 5 === 0) {
      array[j] = "Yu-Gi-Oh";
    }
    if (array[j] % 2 === 0 && array[j] % 3 === 0) {
      array[j] = "Yu-Gi";
    }
    if (array[j] % 2 === 0 && array[j] % 5 === 0) {
      array[j] = "Yu-Oh";
    }
    if (array[j] % 3 === 0 && array[j] % 5 === 0) {
      array[j] = "Gi-Oh";
    }
    if (array[j] % 2 === 0) {
      array[j] = "Yu";
    }
    if (array[j] % 3 === 0) {
      array[j] = "Gi";
    }
    if (array[j] % 5 === 0) {
      array[j] = "Oh";
    }
  }
  console.log(array);
};

// Tests

console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));
