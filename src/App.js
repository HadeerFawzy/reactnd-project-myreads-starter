import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './Search.js'
import MyReads from './MyReads.js'
import './App.css'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render= { () => (
          <Search/>
        )}/>
        <Route exact path='/' render= { () => (
          <MyReads/>
        )}/>
      </div>
    )
  }
}

export default BooksApp