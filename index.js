const inquirer = require("inquirer");
const fs = require("fs");


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
    const { title, description, install, usage, license, contribution, tests, github, email } = await inquirer.prompt(questions);

    // determine which license badge to use for the README
    let licenseBadge;
    if (license === "MIT") {
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "GNU GPL v3") {
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "IBM Public") {
        licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else {
        licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    }

    // create README file content using template literals
    const fileData = `
# ${title} ${licenseBadge}
***
    
### Table of Contents
* [Description](###Description)
* [Installation](###Installation)
* [Usage](###Usage)
* [License](###License)
* [Contribution](###Contribution)
* [Tests](###Tests)
* [Questions](###Questions)
---
    
### Description
${description}
    
---
    
### Installation
${install}
    
---
    
### Usage
${usage}
    
---
    
### License
This project is covered under the ${license} license

---
    
### Contribution
${contribution}
    
---
    
### Tests
${tests}
    
---
    
### Questions

[${github}](https://github.com/${github})

${email}
    
---`;

    writeToFile("README.md", fileData);
}

// function call to initialize program
init();
