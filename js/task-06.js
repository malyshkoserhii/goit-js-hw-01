"use strict";

let total = 0;

let input;

do {
  input = prompt("Введіть, будь ласка, число");
  Number(input);

  if (isNaN(Number(input))) {
    alert("Ви не ввели число!");
    continue;
  }

  total += Number(input);
} while (input !== null);

console.log(`Загальна сума ${total}`);