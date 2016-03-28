import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

class Menu extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div>
        <ul className="options">
          <li><Link to="/">
          <i className="fa fa-list fa-2x"></i>
          <span>All</span>
          </Link></li>
          <li><Link to={`/tasks/started`}>
          <i className="fa fa-hourglass-start fa-2x"></i>
          <span>Start</span></Link></li>
          <li><Link to={`/tasks/done`}>
          <i className="fa fa-check fa-2x"></i>
          <span>Done</span></Link></li>
        </ul>
      </div>;
    }
}

export default Menu;
