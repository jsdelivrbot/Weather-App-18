import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <input type="text" />
        <span className="input-group-btn">
          <button className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
