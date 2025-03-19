import inquirer from "inquirer";

import {pool, connectToDb } from "./connection.js"

await connectToDb();

function mainMenu() {
    inquirer.prompt([
        {
            type: "list", 
            name: "action", 
            message: "What would you like to do", 
            choices:[
                 "view all departments",
                 "view all roles",
                 "view all employees",
                 "add a department",
                 "add a role",
                 "add an employee",
                 "update an employee role"
            ]
    
        }
    ]).then(answers => {
        console.log(answers)
                if(answers.action == "view all departments"){
                    // send query for getting all data in departments table
                    // SELECT * FROM department;
                    pool.query("SELECT * FROM department", function(err, res) {
                        if (err) throw err;
    
                        console.table(res.rows)
                        mainMenu();
                    })
    
                }
                if(answers.action == "view all roles"){
    
                }
                if(answers.action == "view all employees"){
    
                }
                if(answers.action == "add a department"){
                    // ask the user for input first
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "deptName",
                            message: "What is the name of the new department?"
                        }
                    ])
                    .then(answers => {
    
                        pool.query("INSERT INTO department(name) VALUES ($1);", [answers.deptName] ,function(err, res) {
                            if (err) throw err;
        
                            console.log("Department has been added!")
                            mainMenu()
                        })
    
                    })
    
                }
                if(answers.action == "add a role"){
    
                }
                if(answers.action == "add an employee"){
    
                }
                if(answers.action == "update an employee role") {

                    // 

                    inquirer.prompt([
                        // what is the employee id of the employee you want to update
                        {
                            type: "input",
                            name: "empId",
                            message: "what is the employee id of the employee you want to update?"
                        },
                        // what will be the new role id for this emplyoee
                        {
                            type: "input",
                            name: "roleId",
                            message: "what will be the new role id for this emplyoee?"
                        }
                    ])
                    .then(answers => {
    
                        pool.query("UPDATE employee SET role_id = $2 WHERE id = $1", [answers.empId, answers.roleId] ,function(err, res) {
                            if (err) throw err;
        
                            console.log("Employee has been updated!")
                            mainMenu()
                        })
    
                    })
                }
    })
}


mainMenu();