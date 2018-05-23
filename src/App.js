import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './Search.js'
import MyReads from './MyReads.js'
import './App.css'

class BooksApp extends Component {

  /*state only has books array to hold books comes from the ajax request*/
  state = {
    books: []
  }

  /*run right after the component is added to the DOM*/
  componentDidMount (){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  /*invoked whenever select tag changes at any book whether in the Search component or the MyReads*/
  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      /*loop over the books array to see if the changed book exists already or we need to add it from the Search list to MyReads list */
      this.state.books.map((oldBook) => {
        if(oldBook.id === book.id){
          /*if exists, only change it's state and render MyReads again with the new updates*/
          // console.log('book exists')
          this.componentDidMount ()
        }else{
          /*if not, push it to the books array, then render MyReads again with the new updates */
          // console.log('book doesnt exist')
          this.state.books.push(book)
          this.componentDidMount ()
        }
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render= { () => (
          /*send the books array and the update function as a prop with the components to the book component*/
          <MyReads books={this.state.books} onShelfChange={this.updateBookShelf}/>
        )}/>
        <Route exact path='/search' render= { () => (
          /*send the books array and the update function as a prop with the components to the book component*/
          <Search books={this.state.books} onShelfChange={this.updateBookShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp