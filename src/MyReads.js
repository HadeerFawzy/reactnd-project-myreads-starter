import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'

class MyReads extends Component {
  state = {
    shelves: [ 
      { id: 0,
        name: 'currentlyReading'
      },
      { id: 1,
        name: 'wantToRead'
      },
      { id: 2,
        name: 'read'
      }
    ]
  }
  render() {
    /*books array to map over, onShelfChange function hold it here only to pass it to the book component*/
    const { books, onShelfChange } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
              { this.state.shelves.map( (shelf) => (
                <div className="bookshelf" key={shelf.id}>
                  <h2 className="bookshelf-title">
                    { shelf.name === 'currentlyReading' ? 'Currently Reading'
                      :shelf.name === 'wantToRead' ? 'Want To Read'
                      :shelf.name === 'read' ? 'Read'
                      : "Neither"}
                  </h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map((book) => ( 
                        book.shelf === shelf.name && (
                          <Book book={book} key={book.id} onShelfChange={onShelfChange}/>
                      )))}
                    </ol>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/search'>
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default MyReads;