import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import classNames from 'classnames';
import TODOSERVICE from '../service';
import AppActions from '../action';

class Row extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = Storage.getState;
    this.state = {
      data: this.props.data
    };
  }
  changeStatus(status) {
    AppActions.changeStatusTask(this.props.data, status, this.props.data.status);
  }
  delete() {
    AppActions.removeTask(this.props.data, this.props.data.status);
  }
  
  render () {
    // console.log(this.props.data);
    var todoClass = classNames({
      'hide': !this.props.data.status || this.props.data.status == 'todo' 
    })
    var startClass = classNames({
      'hide': this.props.data.status == 'started'
    })
    var doneClass = classNames({
      'hide': this.props.data.status == 'done'
    })
    
    var showDoneButton = this.props.data.status;
    return <li>
      <div className="row">
          <div className="col-xs-7">
              <span className={`badged `+this.props.data.status}></span>
              <span className="title">{ this.props.data.name }</span>
          </div>
          
          <div className="col-xs-5">
              <button type="button" className={todoClass} onClick={this.changeStatus.bind(this, 'todo')}>todo</button>
              <button type="button" className={startClass} onClick={this.changeStatus.bind(this, 'start')}>start</button>
              <button type="button" className={doneClass} onClick={this.changeStatus.bind(this, 'done')}>done</button>
              <button type="button" onClick={this.delete.bind(this)}>delete</button>
          </div>
      </div>
    </li>;
  }
}

export default Row;
