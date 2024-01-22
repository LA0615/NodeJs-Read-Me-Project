// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
     type: 'input',
     name: 'title',
     message: 'What is the title of your project?'
    },
    {
     type: 'editor',
     name: 'description',
     message: 'Describe your project.',
    },
    {
    type: 'editor',
    name: 'installation instructions',
    message: 'Please enter the instructions for installation of the app.',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'How does a user use this app?'
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'Did anyone help contribute to this project?',
    },
    {
    type: 'editor',
    name: 'test instructions',
    message: 'What are the instructions for using and running this app?',
    },
    {
     type: 'list',
     name: 'license list',
     message: 'Please choose one license from the given list to use for your readme.',
    choices: ['Apache','Boost', 'IBM',  'MIT', 'Mozilla'],
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      // Log the user's responses
      console.log('User Responses:', answers);
      .catch((error) => {
        console.error('Error occurred:', error);
      };
    }

// Function call to initialize app
init();