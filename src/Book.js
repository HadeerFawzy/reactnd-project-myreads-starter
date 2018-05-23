import React, { Component } from 'react'

class Book extends Component {

  state = {
    value: 'none'
  }

  change = (event) => {
    this.props.onShelfChange(this.props.book, event.target.value)
  }

  render() {
    const { book } = this.props

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            {
              !book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193,}}></div>
            }
            {
              book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193, background: `url(${book.imageLinks.thumbnail})`}}></div>
            }
            
            <div className="book-shelf-changer">
              <select value={this.state.value} onChange={(event) => (this.props.onShelfChange(this.props.book, event.target.value))} >
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