import React from 'react'
import PropTypes from 'prop-types'
import ShelfItem from './ShelfItem'

class BookShelf extends React.Component {

    static propTypes = {
        updateShelf: PropTypes.func.isRequired,
        bookList: PropTypes.array.isRequired,
        shelfName: PropTypes.string.isRequired
    }
    
    render() {
        const { updateShelf, bookList, shelfName } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookList.map((book) => (
                            <li key={book.id}>
                                <ShelfItem updateShelf={updateShelf} book={book}/>
                            </li>
                        ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf