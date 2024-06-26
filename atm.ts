#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";



let myBalance = 160000; // USD
let pinCode = 4545;


let myAnswer = await inquirer.prompt([
  {
    name: "yourpin",
    type: "number",
    message: chalk.green("Please enter your pin code"),
  },
]);

if (myAnswer.yourpin === pinCode) {
  console.log("Your pin code is correct!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Please select your transaction",
      choices: [
        "Account Information",
        "Deposit",
        "Pin Change",
        "Balance",
        "Withdrawl",
        "Fast Cash",
        "Bill Payment",
      ],
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

    if (amountAns.amount > myBalance) {
      console.log("Insufficient balance. Please enter a valid amount.");
    } else {
      myBalance -= amountAns.amount;

      console.log(`Your Remaining Balance is: ${myBalance}`);
    }
  } else if (operationAns.operation === "Cash 1000") {
    myBalance -= 1000;
    console.log(`Your remaining balance is ${myBalance}`);
  } else if (operationAns.operation === "Cash 2000") {
    myBalance -= 2000;
    console.log(`Your remaining balance is ${myBalance}`);
  } else if (operationAns.operation === "Cash 5000") {
    myBalance -= 5000;
    console.log(`Your remaining balance is ${myBalance}`);
  } else if (operationAns.operation === "Cash 10000") {
    myBalance -= 10000;
    console.log(`Your remaining balance is ${myBalance}`);
  } else if (operationAns.operation === "Check your Balance") {
    console.log(`your balance is: ${myBalance}`);
  }
} else {
  console.log(chalk.red.bold.italic("Your Pin code is in-correct! Please re-enter your pin code"));
}
