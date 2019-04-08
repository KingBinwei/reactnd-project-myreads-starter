import React from 'react';
import PropTypes from 'prop-types'

class ShelfItem extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        updateShelf: PropTypes.func.isRequired
    }
    render() {
        const { updateShelf, book } = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks&&book.imageLinks.thumbnail}`}}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={(book.shelf === "move" || !book.shelf) ? "none" : book.shelf} onChange={(e) => updateShelf(book, e)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(',')}</div>
            </div>
        )
    }
}
export default ShelfItem