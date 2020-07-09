"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
const adminInput = prompt("Введіть свій пароль");
let tmessage;

if (ADMIN_PASSWORD === adminInput) {
  message = "Ласкаво просимо!";
} else if (adminInput === null) {
  message = "Скасовано користувачем!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}

alert(message);
