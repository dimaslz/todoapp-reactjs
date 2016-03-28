import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/searchbox';
import Menu from './menu';
import Tasks from './tasks';
import NotFoundPage from './not-found-page';
import RouteManager from './routeManager';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute } from 'react-router'

require("../sass/main.scss");

class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div>
      <SearchBox/>
        <Menu/>
        
        {this.props.children}
      </div>;
    }
}

class Content extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        component: NotFoundPage
      }
      
      if(this._existRoute()) {
        this.state.component = this.props.children.type 
      }
    }
    _existRoute() {
      var exist = ['started', 'done'].filter((value, index) => {
        return value === this.props.params.status
      });
      
      return !!exist.length
    }
    render() {
      return <div>
        {(() => {
          if(this._existRoute()) {
            return this.props.children
          }
          
          return <NotFoundPage/>
        })()}
      </div>
    }
}

// Routes
const routes = {
  path: "/",
  component: App,
  indexRoute: { component: Tasks },
  childRoutes: [
    { 
      path: 'tasks',
      component: Content,
      childRoutes: [{
        path: 'tasks/:status', 
        onEnter: ({ params }, replace) => replace(`/tasks/${params.status}`) 
      }]
    },
    {
      component: Content,
      childRoutes: [{
        path: 'tasks/:status', component: Tasks
      }]
    },
    {
      path: '*',
      component: NotFoundPage,
      status: '404'
    }
  ]
}

// <Router history={browserHistory}>
ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
	document.getElementById('app')
);