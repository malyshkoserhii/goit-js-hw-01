"use strict";

let total = 0;

do {
  let input = prompt("Введіть, будь ласка, число");

  if (input === null) {
    alert("Скасовано корстувачем!");
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert("Ви не ввели число!");
    continue;
  }

  total += input;
} while (true);

console.log(`Загальна сума ${total}`);
