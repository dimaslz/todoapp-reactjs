import $ from 'jquery';
import assign from "react/lib/Object.assign";
import { EventEmitter } from "events";
import AppDispatcher from "./dispatchers/dispatchers"
import AppAction from "./action"

// var TODOSERVICE = {
//   deleteTask: (task) => {
//     return $.ajax({
//       url: "http://todo-node-api.dimaslz.io/api/"+task._id+"/delete",
//       method: "DELETE",
//       dataType: "json"
//     });
//   }
// }

// export default TODOSERVICE;

var deleteTask = (task) => {
  console.log('task', task)
  return $.ajax({
    url: "http://todo-node-api.dimaslz.io/api/"+task._id+"/delete",
    method: "DELETE",
    dataType: "json"
  });
}

  
const CHANGE_EVENT = 'change';
let TODOSERVICE = assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },
  dispatcherIndex: AppDispatcher.register((payload) => {
    'use strict';
    
    switch(payload.action.actionType) {
      case 'REMOVE_TASK':
        deleteTask(payload.action.task).done(() => {
          AppAction.getTasks().done((result) => {
            AppDispatcher.handleViewAction({
                actionType: 'GET_TASKS'
            });
          });
        });
       break;
      case 'GET_TASKS':
       break;
       
      default:
        return true;
    }
    
    TODOSERVICE.emitChange();
    return true;
  })
})

export default TODOSERVICE;