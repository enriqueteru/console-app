const { resolve } = require("path");

require("colors");

const showMsg = () => {
  return new Promise((resolve) => {
    

    console.log(`${"1.".green}  Create Task`);
    console.log(`${"2.".green}  List All Tasks `);
    console.log(`${"3.".green}  List Completed Task`);
    console.log(`${"4.".green}  List Pending Task`);
    console.log(`${"5.".green}  Delete Task`);
    console.log(`${"6.".green}  Exit\n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("\n Select an option ", (opt) => {
      readline.close();
      resolve(opt);
    
    });
  });
};

const pause = () => {
    return new Promise(resolve => { 
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
          });

          readline.question(" \n Press 'ENTER' for continue ", (opt) => {
            readline.close();
            resolve();
            console.clear();
          }); 

    })}

module.exports = {
  showMsg,
  pause,
};
