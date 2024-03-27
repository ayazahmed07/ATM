#! /usr/bin/env node
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 60000; // USD
let pinCode = 4545;

let myAnswer = await inquirer.prompt([
  {
    name: "yourpin",
    type: "number",
    message: "Please enter your pin code",
  },
]);

if (myAnswer.yourpin === pinCode) {
  console.log("Your pin code is correct!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Please select anyone option",
      choices: ["Withdrawl", "Check your Balance"],
    },
  ]);

  if (operationAns.operation === "Withdrawl") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Please enter your amount",
        type: "number",
      },
    ]);

    myBalance -= amountAns.amount;

    console.log(`Your Remaining Balance is: ${myBalance}`);
  } else if (operationAns.operation === "Check your Balance") {
    console.log(`your balance is: ${myBalance}`);
  }
} else {
  console.log("Your Pin code is in Correct! Please re-enter your password");
}
