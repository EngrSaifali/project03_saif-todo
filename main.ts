#!/usr/bin/env node

// To-Do List using Typescript

import inquirer from "inquirer";

let taskManager = [];
let condition = true;

while(condition) {

    let todos = await inquirer.prompt([

        {
            name : "firstQuestion",
            type : "input",
            message : "What task would you like to add?"
        },

        {
            name : "secondQuestion",
            type : "confirm",
            message : "Want to add more tasks?",
            default : "true"
        }
    ]);

    taskManager.push(todos.firstQuestion);
    console.log(taskManager);

    condition = todos.secondQuestion;
}