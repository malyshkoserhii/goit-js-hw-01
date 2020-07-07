"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let droidsAmmount;

droidsAmmount = prompt(
  "Введіть, будь ласка, кількість дроїдів, яку бажеєте придбати"
);
droidsAmmount=Number(droidsAmmount);

let totalPrice = pricePerDroid * droidsAmmount;
totalPrice = Number(totalPrice);

let creditsChange = credits - totalPrice;
creditsChange= Number(creditsChange);

if (droidsAmmount === null) {
  console.log("Скасовано користувачем!");
} else if (totalPrice > credits) {
  console.log("Недостатньо кредитів на рахунку!");
} else {
  console.log(
    `Ви придбали ${droidsAmmount} ремонтних дроїдів, на Вашому рахунку залишилося ${creditsChange} кредитів`
  );
}
