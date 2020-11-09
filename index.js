const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a breif description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the instructions for installing your project?",
        name: "install"
    },
    {
        type: "input",
        message: "How is your project used?",
        name: "usage"
    },
    {
        type: "list",
        message: "Which license will you be using for the project?",
        choices: ["MIT", "GNU GPL v3", "IBM Public", "ISC"],
        name: "license"
    },
    {
        type: "input",
        message: "How can others contribute to your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "How should any tests be run for the project?",
        name: "tests"
    },

    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    });
}



// function to initialize program
async function init() {
    // prompt user for README data
    const data = await inquirer.prompt(questions);

    writeToFile("README.md", generateMarkdown(data));
}

// function call to initialize program
init();
