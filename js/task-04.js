"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let droidsAmmount;

droidsAmmount = prompt(
  "Введіть, будь ласка, кількість дроїдів, яку бажеєте придбати"
);

let totalPrice = pricePerDroid * droidsAmmount;

let creditsChange = credits - totalPrice;

if (droidsAmmount === null) {
  console.log("Скасовано користувачем!");
} else if (isNaN(Number(droidsAmmount))) {
  console.log("Було введено не число!");
} else if (totalPrice > credits) {
  console.log("Недостатньо кредитів на рахунку!");
} else {
  console.log(
    `Ви придбали ${droidsAmmount} ремонтних дроїдів, на Вашому рахунку залишилося ${creditsChange} кредитів`
  );
}
