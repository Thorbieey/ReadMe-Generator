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
        name: 'usage',
        message: "Please enter the usage criterias for the app",
        default: "None"
    },
    {
        type: 'input',
        name: 'license',
        message: "Please enter your license for the app",
        default: "None"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please list your contributors. Hint: John Doe Jane Doe",
        default: "No Contributors"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please list your tests",
        default: "None"
    },
    {
        type: 'input',
        name: 'question',
        message: "Please list your questions",
        default: "None"
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
    // call function to write README file
    writeToFile("README.md", generateMarkdown(response))
}