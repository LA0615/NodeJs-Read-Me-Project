// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown, renderLicenseSection } = require("./generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "Please enter the instructions for installation of the app.",
  },
  {
    type: "input",
    name: "usage",
    message: "How does a user use this app?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Did anyone help contribute to this project?",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "What are the instructions for using and running this app?",
  },
  {
    type: "list",
    name: "licenseList",
    message:
      "Please choose one license from the given list to use for your readme.",
    choices: ["Apache", "Boost", "IBM", "MIT", "Mozilla"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to initialize app
function init() {
  // Prompt the user with the questions and collect their responses
  inquirer
    .prompt(questions)
    .then((data) => {
      // Pass the license information to generateMarkdown
      const { badge, description, link } = renderLicenseSection(data.licenseList);
      const readmeContent = generateMarkdown({
        ...data,
        licenseBadge: badge,
        licenseDescription: description,
        licenseLink: link,
      });

      const fileName = "README.md";
      // TODO: Create a function to write README file
      function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
          if (err) {
            console.error("Error writing README file:", err);
          } else {
            console.log("README file written successfully!");
          }
        });
      }

      writeToFile(fileName, readmeContent);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
}

// Function call to initialize app
init();