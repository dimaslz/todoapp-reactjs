import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

class Menu extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div>
        <Link to="/">Home</Link>
        <Link to={`/tasks/started`}>Start</Link>
        <Link to={`/tasks/done`}>Done</Link>
      </div>;
    }
}

export default Menu;
