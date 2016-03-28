import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TODOSERVICE from './service';
import AppAction from './action';
import NotFoundPage from './not-found-page';
import Row from './components/row';
import AppDispatcher from './dispatchers/dispatchers';

require("../sass/main.scss");

class Tasks extends React.Component {
    constructor () {
      super();
      
      this.state = {
        rows: [],
        arr: [],
        render: {}
      };
      
      this._onChange = this._onChange.bind(this);
    }
    getTasks(status) {
      AppAction.getTasks().done((result) => {
        this.setState({rows: result.data});
        AppDispatcher.handleViewAction({
            actionType: 'GET_TASKS',
            action: result.data
        });
      });
    }
    _onChange(status) {
      AppAction.getTasks(status).done((result) => {
        this.setState({rows: result.data});
      });
    }
    loadTasks(tasks) {
      var self = this;
      if(tasks.length > 0) {
        self.setState({rows: tasks})
      }
    }
    componentDidMount() {
      // this.getTasks(this.props.params.status);
      this._onChange(this.props.params.status || '');
    }
    componentWillMount() {
      TODOSERVICE.addChangeListener(this._onChange)
    }
    
    componentDidUpdate (prevProps) {
      let oldId = prevProps.params.status
      let newId = this.props.params.status
      if (newId !== oldId)
        // this.getTasks(this.props.params.status);
        this._onChange(this.props.params.status || '');
    }
    componentWillUnmount() {
      TODOSERVICE.removeChangeListener(this._onChange)
    }
    delete(task) {
      console.log(task, this);
    }
    
    render() { 
      return <div>
        <p>Started</p>
        
        <ul>
        {this.state.rows.map((value, index) => (
          <Row key={index} data={value}/>
        ))}
        </ul>
      </div>;
    }
}

export default Tasks;