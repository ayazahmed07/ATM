#! /usr/env/node 
import inquirer from "inquirer";

let myBalance = 60000; // USD
let pinCode = 4545;

let myAnswer = await inquirer.prompt([
  {
    name: "yourpin",
    type: "number",
    message: "Please enter your pin code",
  },
]);
if(myAnswer.yourpin === pinCode){console.log("Your pin code is correct");}
else {console.log("Your pin code is incorrect");}
