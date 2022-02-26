const Task = require("./Task");

class Tasks {
  _taskList = {};

  get listArr() {
    const list = [];
    Object.keys(this._taskList).forEach(key => { 
      list.push( this._taskList[key]);
    })
    return list;
  }

  constructor() {
    this._taskList = {};
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._taskList[task.id] = task;
  }
}

module.exports = Tasks;
