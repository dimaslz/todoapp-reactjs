import $ from 'jquery';
import assign from "react/lib/Object.assign";
import { EventEmitter } from "events";
import AppDispatcher from "./dispatchers/dispatchers"
import AppAction from "./action"

var deleteTask = (task) => {
  return $.ajax({
    url: "http://todo-node-api.dimaslz.io/api/"+task._id+"/delete",
    method: "DELETE",
    dataType: "json"
  });
}

var changeStatusTask = (task, status) => {
  task.status = status;
  return $.ajax({
    url: "http://todo-node-api.dimaslz.io/api/"+task._id+"/update/status",
    method: "PUT",
    data: task,
    dataType: "json"
  });
}

var addTask = (task) => {
  return $.ajax({
    url: "http://todo-node-api.dimaslz.io/api/add",
    method: "POST",
    data: task,
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
        deleteTask(payload.action.task).done((result) => {
          TODOSERVICE.emitChange();
        });
       break;
      case 'CHANGE_STATUS_TASK':
        changeStatusTask(payload.action.task, payload.action.status).done((result) => {
          TODOSERVICE.emitChange();
        });
       break;
      case 'GET_TASKS':
        TODOSERVICE.emitChange();
        break;
      case 'ADD_TASK':
        addTask(payload.action.task).done((result) => {
          TODOSERVICE.emitChange();
        });
        break;
       
      default:
        return true;
    }
    
    return true;
  })
})

export default TODOSERVICE;