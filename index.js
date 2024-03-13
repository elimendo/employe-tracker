const inquirer = require("inquirer");
const queries = require("./db/queries");

function questionOne() {
  inquirer
    .prompt([
      {
        name: "mainMenu",
        message: " What are you looking for?",
        type: "list",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Quit",
        ],
      },
    ])
    .then((response) => {
      switch (response.mainMenu) {
        case "View all Departments":
          viewAllDepartments();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Quit":
          process.exit();
      }
    });
}

function viewAllDepartments() {
  queries
    .getAllDepartments()
    .then(([departmentData]) => {
      console.table(departmentData);
    })
    .then(() => {
      questionOne();
    });
}

function viewAllRoles() {
  queries
  .getAllRoles()
  .then(([roleData]) => {
    console.table(roleData)
  })
  .then(() => {
    questionOne();
  });
}

function viewAllRoles() {
  console.log("view all roles");
}

questionOne();
