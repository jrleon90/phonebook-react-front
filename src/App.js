import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/searchBar';
import ContactList from './containers/contactList';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      searchTerm:''
    }

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(searchTerm){
    this.setState({
      searchTerm: searchTerm
    });
  }
  render() {
    return (
      <div className="">
        <ContactList searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;
