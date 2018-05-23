import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'

class MyReads extends Component {
  render() {
    const { books, onShelfChange } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { books.map((book) => ( 
                    book.shelf === 'currentlyReading' && (
                      <Book book={book} key={book.id} onShelfChange={onShelfChange}/>
                    )
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { books.map((book) => ( 
                    book.shelf === 'wantToRead' && (
                      <Book book={book} key={book.id} onShelfChange={onShelfChange}/>
                    )
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { books.map((book) => ( 
                    book.shelf === 'read' && (
                      <Book book={book} key={book.id} onShelfChange={onShelfChange}/>
                    )
                  ))}
                </ol>
              </div>
            </div>
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