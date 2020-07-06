"use strict";

const stateInput = prompt("Введіть країну доставки товару");
const state =  stateInput !== null ? stateInput.toLowerCase() : 'Скасовано користувачем!';

let deliveryPrice;

switch (state) {
  case 'Скасовано користувачем!':
    alert("Скасовано користувачем!");
    break;
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
    alert("У вашій країні доставка недоступна");
}

console.log(`Доставка в ${state} буде коштувати ${deliveryPrice} кредитів`);

