const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

let employees = []

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const create = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'What is the role?',
      choices: ['manager', 'intern', 'engineer']
    },
    {
      type: 'input',
      name: 'name',
      message: 'enter name'
    },
    {
      type: 'input',
      name: 'id',
      message: 'enter id'
    },
    {
      type: 'input',
      name: 'email',
      message: 'enter email'
    }
  ])
    .then(res => {
      if (res.role == 'manager') {
        inquirer.prompt(
          {
            type: 'input',
            name: 'officeNumber',
            message: 'enter office phone number'
          })
          .then(mngr => {
            employees.push(new Manager(res.name, res.id, res.email, mngr.officeNumber))
            inquirer.prompt({
              type: 'confirm',
              name: 'cont',
              message: 'Would you like to add more employees?'
            })
              .then(res2 => {
                if (res2.cont) { create() }
                else {
                  fs.writeFileSync('team.html', render(employees))
                  console.log('file created!')
                }
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      }
      else if (res.role == 'engineer') {
        inquirer.prompt(
          {
            type: 'input',
            name: 'github',
            message: 'enter github username'
          })
          .then(eng => {
            employees.push(new Engineer(res.name, res.id, res.email, eng.github))
            inquirer.prompt({
              type: 'confirm',
              name: 'cont',
              message: 'Would you like to add more employees?'
            })
              .then(res2 => {
                if (res2.cont) { create() }
                else {
                  fs.writeFileSync('team.html', render(employees))
                  console.log('file created!')
                }
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      }
      else if (res.role == 'intern') {
        inquirer.prompt(
          {
            type: 'input',
            name: 'school',
            message: 'enter school'
          })
          .then(int => {
            employees.push(new Intern(res.name, res.id, res.email, int.school))
            inquirer.prompt({
              type: 'confirm',
              name: 'cont',
              message: 'Would you like to add more employees?'
            })
              .then(res2 => {
                if (res2.cont) { create() }
                else {
                  fs.writeFileSync('team.html', render(employees))
                  console.log('file created!')
                }
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      }
      // else {
      //   employees.push(new Employee(res.name, res.id, res.email))
      //   inquirer.prompt({
      //     type: 'confirm',
      //     name: 'cont',
      //     message: 'Would you like to add more employees?'
      //   })
      //     .then(res2 => {
      //       if (res2.cont) { create() }
      //       else {
      //         fs.writeFileSync('team.html', render(employees))
      //       }
      //     })
      //     .catch(err => console.log(err))
      // }

    })
    .catch(err => console.log(err))
}
create()

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
