#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];  //compiling list
let condition= true;


while(condition)
{let tasks = await inquirer.prompt(
    [
        {
            name: "todo",
            message: "what you want to add in your todo",
            type: "input"
        },

        {
            name:"addOns",
            message: "do you want to add more?",
            type: "confirm",
            default: "false"
        }
     ]
);
todos.push(tasks.todo);
condition = tasks.addOns
console.log(todos)
};
    