import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './Search.js'
import MyReads from './MyReads.js'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount (){
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({books: books})
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/search' render= { () => (
          <Search/>
        )}/>
        <Route exact path='/' render= { () => (
          <MyReads books= {this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp