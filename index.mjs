import inquirer from 'inquirer';
import fs from 'fs/promises';
import generateMarkdown from './utils/generateMarkdown.js';

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's the title of your project? Hint: Project Name",
        default: "Untitled Project"
    },
    {
        type: 'input',
        name: 'description',
        message: "Describe your project in a few words",
        default: "This is an awesome app"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please enter the necessary installation process for your application",
        default: "None"
    },
    {
        type: 'input',
        name: 'deployedAppUrl',
        message: "Please enter the link for the deployed application",
        default: "https://thorbieey.github.io/Weather-Dashboard/"
    },
    {
        type: 'input',
        name: 'repoUrl',
        message: "Please enter the link for the application's gitHub repository",
        default: "https://github.com/Thorbieey/Weather-Dashboard.git"
    },
    {
        type: 'list',
        name: 'license',
        message: "Please choose your license for the app",
        choices: ['The MIT License', 'ISC License (ISC)', 'GNU GPL v2', 'GNU GPL v3', 'Apache 2.0 License'],
        filter(val) {
            return val;
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please enter contribution guidelines",
        default: "No Contributions"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please enter test instructions",
        default: "None"
    },
    {
        type: 'input',
        name: 'author',
        message: "Please enter your full name. Hint: John Doe",
        default: "John Doe"
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "Please enter your github username",
        default: "Thorbieey"
    },
    {
        type: 'input',
        name: 'gitHubLink',
        message: "Please enter the link to your github profile",
        default: "https://github.com/Thorbieey"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email address",
        default: "tobiolajide887@yahoo.com"
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: "Please enter your linkedIn URL",
        default: "https://www.linkedin.com/in/tobi-olajide/"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
}

init();
// function to initialize program
async function init() {
    const response = await inquirer
    .prompt(
        // questions to derive information about the application repo
        questions 
    )
    // add generated license badge to response object
    response.licenseBadge = generateLicenseBadge(response.license)
    // call function to write README file
    writeToFile("README.md", generateMarkdown(response))
}

// function to generate licence badge. Provides license info on click of badge
function generateLicenseBadge(license) {
    if (license === "The MIT License") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license === "ISC License (ISC)") {
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    } else if (license === "GNU GPL v2") {
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    }else if (license === "GNU GPL v3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }else if (license === "Apache 2.0 License") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
}