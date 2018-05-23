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
    // console.log(book, shelf)
    BooksAPI.update(book, shelf).then((response) => {
      this.state.books.map((oldBook) => {
        if(oldBook.id === book.id){
          console.log('book exists')
          this.componentDidMount ()
        }else{
          console.log('book doesnt exist')
          this.state.books.push(book)
          this.componentDidMount ()
        }
      })

      // console.log(response)
      // this.state.books.push(book)
      // console.log(this.state.books)
      // this.setState({books: this.state.books})
      // this.componentDidMount ()
      // console.log(book, this.state.books)

    })
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