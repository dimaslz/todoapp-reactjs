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
  start(button) {
    return this.props.data.status == button ? 'hide' : '';
  }
  done() {
    
  }
  delete() {
    // TODOSERVICE.deleteTask(this.props.data).done(() => {
    //   console.log('borrada');
    // })
    // console.log(this)
    // AppActions.removeTask(this.props.data);
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
    return <row>
      <div className="row">
          <div className="col-xs-7">
              <span className={`badged `+this.props.data.status}></span>
              <span className="title">{ this.props.data.name }</span>
          </div>
          
          <div className="col-xs-5">
              <button type="button" className={todoClass}>todo</button>
              <button type="button" className={startClass}>start</button>
              <button type="button" className={doneClass}>done</button>
              <button type="button" onClick={this.delete.bind(this)}>delete</button>
          </div>
      </div>
    </row>;
  }
}

export default Row;
