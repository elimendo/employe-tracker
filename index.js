const inquirer = require('inquirer')

function questionOne(){
    inquirer.prompt(
        [{
            name:"mainMenu",
            message: " What are you looking for?",
            type: "list",
            choices: ["View all Departments"]

        }]
    ).then( (response)=>{
    console.log(response)
    })
}

questionOne();