import React, { Component } from 'react'

class Book extends Component {

  /* this value to make the default value for any book is NONE 
   * "it cause problem with the Currently reading option if NONE isn't selected at first"
   */
  state = {
    value: 'none'
  }

  render() {
    const { book } = this.props

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            {
              /* condition to see if the book has thumbnail, 
               * because if it hasn't it cause a problem calling book.imageLinks.thumbnail
               */
              !book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193,}}></div>
            }
            {
              book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193, background: `url(${book.imageLinks.thumbnail})`}}></div>
            }
            
            <div className="book-shelf-changer">
              <select value={this.state.value} onChange={
                  /*sending the book changed and the new value to the App.js to update the book at the server*/
                  (event) => (this.props.onShelfChange(this.props.book, event.target.value))
                }>
                <option value="none">Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors}
          </div> 
        </div>
      </li>
    )
  }
}

export default Book;