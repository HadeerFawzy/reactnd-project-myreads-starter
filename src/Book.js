import React from 'react'

function Book (props) {

  /* this value to make the default value for any book is NONE 
   * "it cause problem with the Currently reading option if NONE isn't selected at first"
   */

  return (
    <li key={props.book.id}>
      <div className="book">
        <div className="book-top">
          {
            /* condition to see if the book has thumbnail, 
             * because if it hasn't it cause a problem calling book.imageLinks.thumbnail
             */
            !props.book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193,}}></div>
          }
          {
            props.book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193, background: `url(${props.book.imageLinks.thumbnail})`}}></div>
          }
          <div className="book-shelf-changer">
            <select 
              value={ props.book.shelf ?  props.book.shelf : 'none' }
              onChange={
                /*sending the book changed and the new value to the App.js to update the book at the server*/
                (event) => (props.onShelfChange(props.book, event.target.value))
              }>
              <option value="moveTo">Move to...</option>
              { props.book.shelf === 'currentlyReading' ? <option value='currentlyReading'>&#10004; Currently Reading</option> : <option value="currentlyReading">Currently Reading</option>}
              { props.book.shelf === 'wantToRead' ? <option value='wantToRead'>&#10004; Want To Read</option> : <option value="wantToRead">Want to Read</option>}
              { props.book.shelf === 'read' ? <option value="read">&#10004; Read</option> : <option value="read">Read</option>}
              { !props.book.shelf ? <option value="none">&#10004; None</option> : <option value="none">None</option>} 
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">
          {props.book.authors}
        </div> 
      </div>
    </li>
  )
}

export default Book;