import inquirer from 'inquirer';
import fs from 'fs/promises';
import generateMarkdown from './assets/utils/generateMarkdown.js';
import generateLicenseBadge from './assets/utils/generateLicenseBadge.js';
import questions from './assets/utils/questions.js';


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
}

init();
// function to initialize program
async function init() {
    const response = await inquirer
    .prompt(
        // array of questions to derive information about the application repo
        questions 
    )
    // call function to generate licence badge & add generated license badge to response object
    response.licenseBadge = generateLicenseBadge(response.license)
    // display reponse (i.e., retrieved information about application) in console
    console.log(response);
    // call function to write README file
    writeToFile("README.md", generateMarkdown(response))
}