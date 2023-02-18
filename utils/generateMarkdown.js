// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description 
  
${data.description}

${data.licenseBadge}

---
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

---
## Installation

${data.installation}

---
## Usage 

### Deployed Application

* The URL of the deployed application:
[https://${data.usage}](https://${data.usage})

* The URL of the GitHub repository: 
[https://${data.usage}](https://${data.usage})

### Screenshots/Demo

![Untitled Image](./)
![Untitled Gif](./)

---
## License
${data.licenseBadge}

License used for this application: **${data.license}**. Learn more about [choosing licenses](https://choosealicense.com/licenses/).

---
## Contributors

${data.contributing}

---
## Tests

${data.tests}

---
## Questions

${data.question}
  
---
`;
}

module.exports = generateMarkdown;
