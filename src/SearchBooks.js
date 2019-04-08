import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import ShelfItem from './ShelfItem'

class SearchBooks extends React.Component {

    static propTypes = {
        updateShelf: PropTypes.func.isRequired
    }
    state = {
        searchBooksList: []
    }
    search(e) {
        const val = e.target.value.trim()
        let booksList = []
        this.props.myBooksList.forEach((item, index) => {
            booksList = booksList.concat(item.books)
        })
        BooksAPI.search(val).then(res => {
            console.log(res, this)
            let temp = res && res.length ? res : []
            booksList.forEach((item, index) => {
                let idx = temp.findIndex((book) => {
                    return book.id === item.id
                })
                if (idx >= 0) {
                    temp[idx].shelf = item.shelf
                }
            })
            this.setState({
                searchBooksList: temp
            })
        })
        booksList.sort(sortBy('title'))
    }

    render() {
        const { updateShelf } = this.props
        const { searchBooksList } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author" onChange={this.search.bind(this)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchBooksList && searchBooksList.map((book) => (
                            <ShelfItem updateShelf={updateShelf} key={book.id} book={book}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks