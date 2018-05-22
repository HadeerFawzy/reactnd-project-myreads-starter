import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book.js'

class Search extends Component {
  state = {
    query: '',
    booksFromSearch: []
  }
  updateQuery = (query) => {
    this.setState({query: query })
    this.searchBooks(this.state.query)
  }
  searchBooks = (query) => {
    BooksAPI.search(query, 20).then( 

      response => {
        if(response) {
          this.setState({booksFromSearch: response});
          console.log(response)
        }
        if(response && response.error === "empty query"){
          this.setState({booksFromSearch: []});
        }
      },
      error => {
        this.setState({booksFromSearch: []});
      }

    )
  }


  render() {

    const { books } = this.props
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
              <Book book={book} key={book.id}/>
            )))
          }
          {
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