// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description 

${data.description}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage 

### Deployed Application

* The URL of the deployed application:
[https://${data.usage}](https://${data.usage})

* The URL of the GitHub repository: 

## License

Licensed under the [MIT](https://${data.license}) license

## Contributors

${data.contributing}
    
## Tests

${data.tests}

## Questions

${data.question}
  

`;
}

module.exports = generateMarkdown;
