import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onSearchChange(term) {
    console.log(term);
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.onSearchChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;


// Take an array and replace every 0 with null

function test(expected, actual) {
  if (expected === actual) {
    console.log('Test passed!');
  } else {
    console.log(`Test failed, expected ${expected} to equal ${actual}`);
  }
}

function nullZeros(array) {
  //Your code here

}

test()