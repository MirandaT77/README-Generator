const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'project',
      message: 'What is the name of your project?'
      
    }
  ])
  .then(answers => console.log(answers));

  // const fs = require('fs');
// const generatePage = require('./src/page-template');


// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });