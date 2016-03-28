import React from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends React.Component {
  render () {
    return <div>
      <form>
          <input className="form-control" type="text" placeholder="Writte your task and press enter"/>
          <input type="submit" className="btn btn-default" value="Add task" />
      </form>
    </div>;
  }
}

export default SearchBox;
