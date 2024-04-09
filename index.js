#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 7777;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin number",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("pin is correct login successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select an option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`your current balance is: ${balance}`);
        }
        else {
            console.log(`insufficient balance`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "select the amount of withdraw:",
                choices: ["500", "1000", "5000", "8000", "10000"],
            },
        ]);
        if (fastcashAns.amount <= myBalance) {
            let balance2 = myBalance - fastcashAns.amount;
            console.log(`your remainig balance is ${balance2}`);
        }
        else {
            console.log(`you have insufficient balance`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("your pin code is incorrect");
}
