import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'

class Search extends Component {
  /*query to hold the input search value in it, array to hold the books coming from search in it*/
  state = {
    query: '',
    booksFromSearch: []
  }
  updateQuery = (query) => {
    /*keep track if the input value changed to change it at the state*/
    this.setState({query: query })
    /*invoke the searchBooks function with the query value*/
    query ? this.searchBooks(this.state.query) : this.setState({booksFromSearch: []})
  }
  searchBooks = (query) => {
    BooksAPI.search(query, 20).then( 
      response => {
        if(response) {
          response.map ( (newbook) => (
            this.props.books.map ( (existbook) => (
              existbook.id === newbook.id && (newbook.shelf = existbook.shelf)
            ))
          ))
          this.setState({booksFromSearch: response});
          // console.log(response)
        }
        /*if the search come back with empty array*/
        if(response && response.error === "empty query"){
          this.setState({booksFromSearch: []});
        }
      },
      /*if there is error with the search*/
      error => {
        this.setState({booksFromSearch: []});
      }
    )
  }


  render() {
    /*onShelfChange function hold it here only to pass it to the book component*/
    const { onShelfChange } = this.props
    const { query } = this.state
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
                to='/'
                className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input 
                  type="text" 
                  placeholder="Search by title or author" 
                  value={query}
                  onChange ={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          { this.state.booksFromSearch.length > 0 && (
            this.state.booksFromSearch.map((book) => ( 
              <Book book={book} key={book.id} onShelfChange={onShelfChange}/>
            )))
          }
          {
            /*condition if the search comeback empty, tell the user*/
            this.state.booksFromSearch.length === 0 &&(
              <div>No Results</div>
            )
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;