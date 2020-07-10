"use strict";

const stateInput = prompt("Введіть країну доставки товару");

let deliveryPrice;
let message;

if (stateInput === null) {
  console.log("Скасовано користувачем!");
} else {
  const accessibleState = stateInput.toLowerCase();

  switch (stateInput.toLowerCase()) {
    case "китай":
      deliveryPrice = 100;
      break;
    case "чилі":
      deliveryPrice = 250;
      break;
    case "австралія":
      deliveryPrice = 170;
      break;
    case "індія":
      deliveryPrice = 80;
      break;
    case "ямайка":
      deliveryPrice = 120;
      break;
    default:
      deliveryPrice = "delivey is unavailable";
  }

  message =
    deliveryPrice !== "delivey is unavailable"
      ? `Доставка в ${accessibleState} буде коштувати ${deliveryPrice} кредитів`
      : "У Вашій країні доставка недоступна";

  console.log(message);
}
