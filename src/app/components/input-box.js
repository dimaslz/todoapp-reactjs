import React from 'react';
import ReactDOM from 'react-dom';
import AppActions from '../action';
import classNames from 'classnames';

class InputBox extends React.Component {
  constructor() {
    super();
    this.state = {
      inputBox: '',
      canSubmit: false,
      canSubmitClass: ''
    }
  }
  _registerTask(event) {
    var task = {
      "id": '',
      "name": this.state.inputBox,
      "description": '',
      "status": '',
      "date": new Date(),
      "editable": false
    }
    AppActions.addTask(task, 'all');
    this.setState({inputBox: '', canSubmit: false})
  }
  handleInputChange(event) {
    this.setState({inputBox: event.target.value, canSubmit: event.target.value.length>0})
  }
  render () {
    return <div>
      <form onSubmit={this._registerTask.bind(this)}>
          <input className="form-control" type="text" placeholder="Writte your task and press enter" value={this.state.inputBox} onChange={this.handleInputChange.bind(this)}/>
          <input type="submit" className="btn btn-default" value="Add task" disabled={!this.state.canSubmit} />
      </form>
    </div>;
  }
}

export default InputBox;
