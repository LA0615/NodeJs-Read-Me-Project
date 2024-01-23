// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
    const content = `
      # ${data.title}
  
      ## Description
      ${data.description}
  
      ## Table of Contents
      1. [Installation](#installation)
      2. [Usage](#usage)
      3. [Contributing](#contributing)
      4. [Tests](#tests)
      5. [License](#license)
      6. [Questions](#questions)
  
      ## Installation
      ${data.installation_instructions}
  
      ## Usage
      ${data.usage}
  
      ## Contributing
      ${data.contribution}
  
      ## Tests
      ${data.test_instructions}
  
      ## License
      This project is licensed under the ${data.license} license.
  
      ## Questions
      GitHub: [${data.github}](https://github.com/${data.github})
      Email: ${data.email}
    `;
  
    return content;
  }
  

module.exports = generateMarkdown;