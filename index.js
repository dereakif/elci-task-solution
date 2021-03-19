const num1 = "123--354-32- 10";
const num2 = 123456789;

const converter = (a) => {
  let result = "";
  let result1 = [];
  if (typeof a == "number") {
    result = a
      .toString()
      .replace(/[^0-9]/g, "")
      .split("");
    for (let i = 0; i < result.length; i++) {
      if (i == 0) {
        result1.push(result[i]);
      } else if (i % 3 == 0) {
        result1.push(" ");
        result1.push(result[i]);
      } else {
        result1.push(result[i]);
      }
    }
  }
  if (typeof a == "string") {
    result = a
      .toString()
      .replace(/[^0-9]/g, "")
      .split("");
    for (let i = 0; i < result.length; i++) {
      if (i == 0) {
        result1.push(result[i]);
      } else if (i <= 6 && i % 3 == 0) {
        result1.push(" ");
        result1.push(result[i]);
      } else if (i > 6 && i % 2 == 0) {
        result1.push(" ");
        result1.push(result[i]);
      } else {
        result1.push(result[i]);
      }
    }
  }
  return result1.join("");
};
console.log(converter(num1));
console.log(converter(num2));
