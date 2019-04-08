import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link, Route} from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    myBooksList: []
  }
  getAll = () => {
    BooksAPI.getAll().then((res) => {
      const ret = []
      res.forEach((item) => {
        const index = ret.findIndex((shelf) => {
          return shelf.title === item.shelf
        })
        if (index >= 0) {
          ret[index].books.push(item)
        } else {
          ret.push({
              title: item.shelf,
              books: [item]
          })
        }
      })
      this.setState({
          myBooksList: ret
      })
    })
  }
  updateShelf = (book, e) => {
    BooksAPI.update(book, e.target.value).then(() => {
      this.getAll()
    })
  }
  componentDidMount() {
    this.getAll()
  }
  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => (
              <SearchBooks myBooksList={this.state.myBooksList} updateShelf={this.updateShelf}/>
          )} />
          <Route path="/" exact render={() => (
              <div className="list-books">
                  {
                    this.state.myBooksList.map((item) => (
                        <BookShelf updateShelf={this.updateShelf} key={item.title} shelfName={item.title} bookList={item.books}/>
                    ))
                  }
                  <Link to='/search'>
                      <div className="open-search">
                          <button>Add a book</button>
                      </div>
                  </Link>
              </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp