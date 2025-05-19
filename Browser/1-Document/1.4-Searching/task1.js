//Getting the table with id AgeTable
let table = document.getElementById("age-table");
console.log(table);
//All labels under that table
let labels = table.querySelectorAll("label");
console.log(labels);
//First td
let firsttd = table.querySelector("td");
console.log(firsttd.textContent); 
//form with the name Search
let form = document.querySelector('form[name="search"]');
console.log(form);
//first input
let firstinput = form.querySelector('input');
console.log(firstinput);
//last input
let inputs = form.querySelectorAll("input");
let lastInput = inputs[inputs.length - 1];
console.log(lastInput);
