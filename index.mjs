import inquirer from 'inquirer';
import fs from 'fs/promises';
import generateMarkdown from './assets/utils/generateMarkdown.js';
import generateLicenseBadge from './assets/utils/generateLicenseBadge.js';

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
        message: "Please enter the necessary installation process for your application"
    },
    {
        type: 'input',
        name: 'deployedAppUrl',
        message: "Please enter the link for the deployed application",
        default: "None"
    },
    {
        type: 'input',
        name: 'repoUrl',
        message: "Please enter the link for the application's gitHub repository",
        default: "None"
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
        default: "No Contributions allowed on this project"
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
        message: "Please enter the link to your github profile"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email address",
        default: "None"
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: "Please enter your linkedIn URL",
        default: "Currently not on LinkedIn"
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
    // display reponse in console
    console.log(response);
    // call function to write README file
    writeToFile("README.md", generateMarkdown(response))
}

// function to generate licence badge. Provides license info on click of badge
