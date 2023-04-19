const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${answers.name}'s Profile</title>
        <style>
          body {
            font-family: sans-serif;
          }
          h1 {
            color: #0077b5;
          }
          /* Add more CSS styles here */
        </style>
      </head>
      <body>
        <h1>${answers.name}</h1>
        <p>Location: ${answers.location}</p>
        <p>Bio: ${answers.bio}</p>
        <p>LinkedIn: <a href="${answers.linkedin}" target="_blank">${answers.linkedin}</a></p>
        <p>GitHub: <a href="${answers.github}" target="_blank">${answers.github}</a></p>
      </body>
    </html>
  `;
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What's your name?",
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you located?',
    },
    {
      type: 'input',
      name: 'bio',
      message: 'Tell us a little about yourself:',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'What is your LinkedIn URL?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub URL?',
    },
  ])
  .then((answers) => {
    fs.writeFile('profile.html', generateHTML(answers), (err) => {
      if (err) throw err;
      console.log('Your profile has been saved to profile.html');
    });
  })
  .catch((error) => {
    console.error(error);
  });
