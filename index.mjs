import inquirer from 'inquirer';
import fs from 'fs/promises';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';
// const fs = require("fs");
// const path = require('path');
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown.js");

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
        default: "No Description Entered"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please enter the necessary installation process for your application",
        default: "I am Awesome"
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
        message: "Please list your tests"
    },
    {
        type: 'input',
        name: 'question',
        message: "Please list your questions"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

init();
// function to initialize program
async function init() {
    const {title, description, installation, usage, contributing, license, tests, question} = await inquirer
  .prompt(
    /* Questions to derive information about the application repo*/
    questions 
  )
  console.log(`${title}, ${installation}, ${tests}, ${contributing}`)
//   writeToFile(index.html, htmlText)
}

// // Index.html file content
// let htmlText = `
//                 <html lang="en">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>Document</title>
//                 </head>
//                 <body>
//                     <main>
//                     <h1>${title}</h1>
//                     <div id = "description">
//                         <h1>Description</h1>
//                         <p>${description}</p>
//                     </div>
//                     <div>
//                         <h1>Table of Contents</h1>
//                         <ul>
//                             <li>Description</li>
//                             <li>Installation</li>
//                             <li>Usage</li>
//                             <li>License</li>
//                             <li>Tests</li>
//                             <li>Questions</li>
//                         </ul>
//                     </div>
//                     <div id = "installation">
//                         <h1>Installation</h1>
//                         <p>${installation}</p>
//                     </div>
//                     <div id = "usage">
//                         <h1>Usage</h1>
//                         <p>${usage}</p>
//                     </div>
//                     <div id = "license">
//                         <h1>License</h1>
//                         <p>${license}</p>
//                     </div>
//                     <div id = "contributors">
//                         <h1>Contributors</h1>
//                         <p>${contributing}</p>
//                     </div>
//                     <div id = "tests">
//                         <h1>Tests</h1>
//                         <p>${tests}</p>
//                     </div>
//                     <div id = "question">
//                         <h1>Questions</h1>
//                         <p>${question}</p>
//                     </div>
//                 </main>
//                 </body>
//                 </html>`


// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions


// let htmlText = `
//                 <html lang="en">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>Document</title>
//                 </head>
//                 <body>
//                     <h1>User Information</h1>
//                     <ul>
//                         <li>Name: ${name}</li>
//                         <li>Location: ${location} </li>
//                         <li>Bio: ${bio}</li>
//                         <li>LinkedIn URL: ${linkedIn}</li>
//                         <li>GitHub URL: ${gitHub}</li>
//                     </ul>
//                 </body>
//                 </html>`

// fs.writeFile('index.html', htmlText)