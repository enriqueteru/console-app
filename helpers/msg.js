require("colors");

const showMsg = () => {
  console.clear();
  console.log("=========================");
  console.log("   select one option  ".green);
  console.log("=========================\n");

  console.log(`${"1.".green}  Create Task`);
  console.log(`${"2.".green}  List All Tasks `);
  console.log(`${"3.".green}  List Completed Task`);
  console.log(`${"4.".green}  List Pending Task`);
  console.log(`${"5.".green}  Delete Task`);
  console.log(`${"6.".green}  Exit\n`);


}



const pause = () => { 
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    
      readline.question("\nPress 'ENTER' for continue ", (opt) => {
        readline.close();
      });
    };
    

module.exports = {
  showMsg,
  pause,
};
