import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/searchbox';
import Menu from './menu';
import Tasks from './tasks';
import NotFoundPage from './not-found-page';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute, NotFoundRoute } from 'react-router'

require("../sass/main.scss");

var notFoundPage = false;
class RouteManager extends React.Component {
  constructor(props) {
    super(props);
    
    // this.state = {
    //   component: NotFoundPage
    // }

    // if(this._existRoute()) {
    //   notFoundPage = !notFoundPage;
    // }
  }
  // _existRoute() {
  //   var exist = ['started', 'done'].filter((value, index) => {
  //     return value === this.props.status
  //   });
    
  //   return !!exist.length
  // }
  // componentDidMount() {
  //   // if(this._existRoute()) {
  //   //   this.state.component = this.props.component;
  //   // }
  // }
  render() {
    return <div>
       <this.props.component.type/>
    </div>;
  }
}

export default RouteManager;