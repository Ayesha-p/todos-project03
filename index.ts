import inquirer from "inquirer"

let todos=[];
let condition=true;
while(condition){
let addtodos =await inquirer.prompt([
    {message:"What you wnat to add in your todos",type:"input" , name:"todo"},

    {message:"Do you wnat to add more in your todos",type:"confirm" , name:"addmore",default:"false"

    }


])
condition = addtodos.addmore;
todos.push(addtodos.todo);
console.log(todos);
} 