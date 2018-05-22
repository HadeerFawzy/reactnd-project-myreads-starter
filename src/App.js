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
      this.setState({books: books})
    })
  }
  updateBookShelf = (book, shelf) => {
    console.log(book, shelf)
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render= { () => (
          <MyReads books={this.state.books} onShelfChange={this.updateBookShelf}/>
        )}/>
        <Route exact path='/search' render= { () => (
          <Search books={this.state.books} onShelfChange={this.updateBookShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp