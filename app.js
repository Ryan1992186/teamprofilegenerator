const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");

const employees = [];

function initApp() {
    startHtml();
    addTeamMember();
}

// creates the prompt for selecting different options using inquirer
function addTeamMember() {
    inquirer.prompt([{
        message: "Please enter team member's name?",
        name: "name"
    },
    {
        type: "list",
        message: "Select the team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Please enter team member's userId",
        name: "userId"
    },
    {
        message: "Please enter team member's email address",
        name: "email"
    }])
        .then(function ({ name, role, userId, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "Username";
            } else if (role === "Intern") {
                roleInfo = "School";
            } else {
                roleInfo = "Phone";
            }
            //generates prompt to request if you would like to add additional team members
            inquirer.prompt([{
                message: `Enter team member ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreTeamMembers"
            }])
                .then(function ({ roleInfo, moreMembers }) {
                    let Team;
                    if (role === "Engineer") {
                        Team = new Engineer(name, userId, email, roleInfo);
                    } else if (role === "Intern") {
                        Team = new Intern(name, userId, email, roleInfo);
                    } else {
                        Team = new Manager(name, userId, email, roleInfo);
                    }
                    employees.push(Team);

                    addHtml(Team)
                        .then(function () {
                            if (moreMembers === "yes") {
                                addMember();
                            } else {
                                finishHtml();
                            }
                        });

                });
        });
}

// HTML DOC code goes below. I will need to return to this section at a later point. 
// No functional code for this yet i am not sure where to start with this...

initApp();