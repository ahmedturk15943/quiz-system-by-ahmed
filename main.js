#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcometo my advanture quiz game:");
console.log("you are required to gain maximum 4 points for the window.");
let points = 0;
//question1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript as a superset of?",
        type: "list",
        choices: ["python", "c++", "java", "javascript"]
    }
]);
if (question1.one == "javascript") {
    console.log("your answe is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "who is the founder of microsoft?",
        type: "list",
        choices: ["elon musk", "bill gates", "Mark", "Ali"]
    }
]);
if (question2.two == "bill gates") {
    console.log("your answe is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 3
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "capital of Pakistan?",
        type: "list",
        choices: ["Karachi", "Islamabad", "Punjab", "Kpk"]
    }
]);
if (question3.three == "Islamabad") {
    console.log("your answe is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "who is the current governor of sindh?",
        type: "list",
        choices: ["Fasih", "Kamran Tessori", "Ahmed", "Ali"]
    }
]);
if (question4.four == "Kamran Tessori") {
    console.log("your answe is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question5
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: " in which language you are hearing my voice?",
        type: "list",
        choices: ["sindhi", "english", "french", "urdu"]
    }
]);
if (question5.five == "urdu") {
    console.log("your answe is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
// output condition
if (points >= 4) {
    console.log("Congratulatioins!");
    console.log(`your points: ${points}`);
}
else {
    console.log("you loss! try next time");
    console.log(`your points: ${points}`);
}
