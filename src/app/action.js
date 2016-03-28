import AppDispatcher from './dispatchers/dispatchers';
import $ from 'jquery';

const AppActions = {
  removeTask: (task, currentPage) => {
    AppDispatcher.handleViewAction({
      actionType: 'REMOVE_TASK',
      task: task,
      page: currentPage
    })
  },
  changeStatusTask: (task, status, currentPage) => {
    AppDispatcher.handleViewAction({
      actionType: 'CHANGE_STATUS_TASK',
      task: task,
      status: status,
      page: currentPage
    })
  },
  addTask: (task, currentPage) => {
    AppDispatcher.handleViewAction({
      actionType: 'ADD_TASK',
      task: task,
      page: ''
    })
  },
  getTasks: (status) => {
    return $.ajax({
      url: "http://todo-node-api.dimaslz.io/api/list?status="+status,
      method: "GET",
      dataType: "json"
    });
  }
}

export default AppActions;