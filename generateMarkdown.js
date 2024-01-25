// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseData = renderLicenseSection(data.licenseList);
  const content = `
  # ${data.title} ${data.licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [License](#license)
  6. [Badges](#Badges)
  7. [Questions](#questions)

  ## Installation
  ${data.installationInstructions}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testInstructions}

  ## License
  ${data.licenseDescription}

  ## Badges
  ${data.licenseBadge}

  For more information, visit [${data.licenseList} License](${data.licenseLink}).

  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})
  Email: ${data.email}
  `;

  return content;
}

// TODO: Create a function that returns the license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  };
  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    Boost: 'https://www.boost.org/LICENSE_1_0.txt',
    IBM: 'https://opensource.org/licenses/IPL-1.0',
    MIT: 'https://opensource.org/licenses/MIT',
    Mozilla: 'https://opensource.org/licenses/MPL-2.0',
  };
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseInfo = {
    Apache: {
      badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      link: 'https://opensource.org/licenses/Apache-2.0',
      description: 'This project is licensed under the Apache License 2.0.',
    },
    Boost: {
      badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
      link: 'https://www.boost.org/LICENSE_1_0.txt',
      description: 'This project is licensed under the Boost License 1.0.',
    },
    IBM: {
      badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
      link: 'https://opensource.org/licenses/IPL-1.0',
      description: 'This project is licensed under the IBM License 1.0.',
    },
    MIT: {
      badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      link: 'https://opensource.org/licenses/MIT',
      description: 'This project is licensed under the MIT License.',
    },
    Mozilla: {
      badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
      link: 'https://opensource.org/licenses/MPL-2.0',
      description: 'This project is licensed under the Mozilla License 2.0.',
    },
  };

  const licenseData = licenseInfo[license];

  if (!licenseData) {
    return { badge: '', link: '', description: '' };
  }

  return licenseData;
}

module.exports = {
  generateMarkdown,
  renderLicenseSection,
};

