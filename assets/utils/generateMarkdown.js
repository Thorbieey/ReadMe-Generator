// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description 
  
${data.description}

${data.licenseBadge}

### User Story

### Acceptance Criteria

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

- Clone repo

        git clone ${data.repoUrl}

${data.installation}

---
## Usage 

### Deployed Application

* The URL of the deployed application:
[${data.deployedAppUrl}](${data.deployedAppUrl})

* The URL of the GitHub repository: 
[${data.repoUrl}](${data.repoUrl})

### Screenshots/Demo

![Untitled Image](./)

![Untitled Gif](./)

---
## License
${data.licenseBadge}

This application is covered under: **${data.license}**. Learn more about [choosing licenses](https://choosealicense.com/licenses/).

---
## Contributors

${data.contributing}

---
## Tests

${data.tests}

---
## Questions

Got any additional questions/enquiries? Reach out to **${data.author}** via:

Email: ${data.email}

GitHub: [${data.gitHub}](${data.gitHubLink})

LinkedIn: ${data.linkedIn}
  
---
`;
}

module.exports = generateMarkdown;
