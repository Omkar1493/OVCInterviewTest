import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import Table from './Table'
import ReactTable from 'react-table';


class App extends Component 
{  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
   
  const { isLoading, users, error } = this.state;
    
   return (
      <div className="App">
        <div className="Table-header" text-align="center">User Table</div>
        <Table data={users}/>
      </div>
    );
  }
}

export default App
