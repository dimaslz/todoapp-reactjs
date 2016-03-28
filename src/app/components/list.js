import React from 'react';
import ReactDOM from 'react-dom';
import Row from './row';
import $ from 'jquery';

class List extends React.Component {
  constructor (props, context) {
    super(props, context);
    
    this.state = Storage.getState;
    this.state = {
      rows: []
    };
  }
  componentWillMount () {
    $.get('http://todo-node-api.dimaslz.io/api/list', function(result) {
      var collection = result.data;
      this.setState({
        rows: collection
      });
    }.bind(this));
  }
  
  render () {
    
    var rows = this.state.rows || [];
    
    return <div>
      {rows.map(function(value, index) {
        return <Row key={index} data={value}/>
        
        
      })}
    </div>;
  }
}

export default List;
