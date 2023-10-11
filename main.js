// 1
let brend = prompt("Введіть бренд взуття який Вам подобаться");
let length = prompt("Введіть довжину стопи в cm");
let size = prompt("Введіть свій розмір взуття");

document.write(
  `Ви носите взуття від бренду ${brend}. Довжина вашої стопи ${length}, тому у Вас розмір ${size}`
);

// 2
let numb = +prompt("Введіть 5 значне число");
while (numb < 10000 || numb > 99999) {
  numb = +prompt("Введіть 5 значне число");
}
console.log(numb);
let result = numb.toString().split("");

console.log(result[2]);
console.log(result.join(" "));
