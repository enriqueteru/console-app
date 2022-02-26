const inquirer = require('inquirer');
const { options } = require('nodemon/lib/config');
require('colors');




const questions = [ 

    { 
        type: 'list', 
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: `${"1.".green}  Create Task`,
            },
            {
                value: '2',
                name: `${"2.".green}  List All Tasks `,
            },
            {
                value: '3',
                name: `${"3.".green}  List Completed Task`,
            },
            {
                value: '4',
                name: `${"4.".green}  List Pending Task`,
            },
            {
                value: '5',
                name: `${"5.".green}  Delete Task`,
            },
    
            {
                value: '0',
                name: `${"6.".green}  Exit\n`,
            }
        ],
    }
]

const inquirerMenu = async () =>{
    console.clear();
    console.log("=========================");
    console.log("   select one option  ".green);
    console.log("=========================\n");
    const {option} = await inquirer.prompt(questions); 
    return option
}


module.exports = { 

    inquirerMenu,
}
