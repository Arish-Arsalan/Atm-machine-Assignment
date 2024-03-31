
import inquirer from "inquirer";

let myBalance = 10000; // Dollar

let mypin = 33441;

 let pinAnswer = await inquirer.prompt(
 [
 
 {
 name: "pin",
 message: "entwer your pin",
 type: "number"
 }
 ]
)

// 33441 pin code...

if(pinAnswer.pin === mypin) {
 console.log("correct pin code !")
}
 
 let opperationAns = await inquirer.prompt(
 [
 {
 name: "opperation",
 message: "please select opation",
 type: "list", 
 choices: ["withdraw", "check balance"]
 }
 ]
 )
 console.log(opperationAns);

 if(opperationAns.opperation === "withdrow") {
 let amountAns = await inquirer.prompt(
 [
 {
 name: "amount",
 message: "enter your amount",
 type: "number"
 }
 ]
 );

 //=, -=, += - false
 myBalance -= amountAns.amount;
 console.log("your remaining balance is: " + myBalance)

 } else if (opperationAns.opperation === "check balance"){
 console.log("your balance is: " + myBalance)
 }
else { 
 console.log("incorrect pin number")
}