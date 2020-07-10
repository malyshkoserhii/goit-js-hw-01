"use strict";

const stateInput = prompt("Введіть країну доставки товару");
const accessibleState = stateInput.toLowerCase();
let deliveryPrice;
let message;

switch (accessibleState) {
  case "Скасовано користувачем!":
    message = alert("Скасовано користувачем!");
    break;
  case "китай":
    deliveryPrice = 100;
    message = console.log(
      `Доставка в ${accessibleState} буде коштувати ${deliveryPrice} кредитів`
    );
    break;
  case "чилі":
    deliveryPrice = 250;
    message = console.log(
      `Доставка в ${accessibleState} буде коштувати ${deliveryPrice} кредитів`
    );
    break;
  case "австралія":
    deliveryPrice = 170;
    message = console.log(
      `Доставка в ${accessibleState} буде коштувати ${deliveryPrice} кредитів`
    );
    break;
  case "індія":
    deliveryPrice = 80;
    message = console.log(
      `Доставка в ${accessibleState} буде коштувати ${deliveryPrice} кредитів`
    );
    break;
  case "ямайка":
    deliveryPrice = 120;
    message = console.log(
      `Доставка в ${accessibleState} буде коштувати ${deliveryPrice} кредитів`
    );
    break;
  default:
    alert("У вашій країні доставка недоступна");
}
