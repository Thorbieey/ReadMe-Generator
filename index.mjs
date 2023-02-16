import inquirer from 'inquirer';
import fs from 'fs/promises';
// import path from 'path';
// import generateMarkdown from './utils/generateMarkdown.js';
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
    const {title, description, installation, usage, contributing, license, tests, question} = await inquirer
    .prompt(
        /* Questions to derive information about the application repo*/
        questions 
    )
    console.log(`${title}, ${installation}, ${tests}, ${contributing}`)
    let htmlText = `
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <main>
                            <h1>${title}</h1>
                            <div id = "description">
                                <h1>Description</h1>
                                <p>${description}</p>
                            </div>
                            <div>
                                <h1>Table of Contents</h1>
                                <ul>
                                    <li><a href="#description">Description</a> </li>
                                    <li><a href="#installation">Installation</a> </li>
                                    <li><a href="#usage">Usage</a> </li>
                                    <li><a href="#license">License</a> </li>
                                    <li><a href="#contributors">Contributions</a> </li>
                                    <li><a href="#tests">Tests</a> </li>
                                    <li><a href="#questions">Questions</a> </li>
                                </ul>
                            </div>
                            <div id = "installation">
                                <h1>Installation</h1>
                                <p>${installation}</p>
                            </div>
                            <div id = "usage">
                                <h1>Usage</h1>
                                <p>${usage}</p>
                            </div>
                            <div id = "license">
                                <h1>License</h1>
                                <p>${license}</p>
                            </div>
                            <div id = "contributors">
                                <h1>Contributors</h1>
                                <p>${contributing}</p>
                            </div>
                            <div id = "tests">
                                <h1>Tests</h1>
                                <p>${tests}</p>
                            </div>
                            <div id = "question">
                                <h1>Questions</h1>
                                <p>${question}</p>
                            </div>
                        </main>
                    </body>
                    </html>`
    writeToFile("index.html", htmlText)
}