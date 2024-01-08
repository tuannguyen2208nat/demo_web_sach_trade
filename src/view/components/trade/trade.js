import React from "react";
import TradeInput from "./trade_input";
import TradeAdd from "./trade_add";
import './trade.scss'

class Trade extends React.Component {
    state = {
        book: [
            { book_name: 'test', book_num: '1' },
            { book_name: 'example', book_num: '2' },
            { book_name: 'sample', book_num: '3' }
        ]
    }

    tradeBook = (val_name) => {
        const existingBook = this.state.book.find(book => book.book_name === val_name);

        if (existingBook) {
            // If the book exists, increment book_num by 1
            existingBook.book_num = existingBook.book_num + 1;
        } else {
            // If the book doesn't exist, add a new book with book_num set to 1
            const newBook = { book_name: val_name, book_num: 1 };
            this.setState(prevState => ({
                book: [...prevState.book, newBook]
            }));
        }
    }

    addBook = (val_name) => {

    }


    render() {
        return (
            <>
                <TradeInput
                    book={this.state.book}
                    tradeBook={this.tradeBook}
                />
                <TradeAdd
                    addBook={this.addBook}
                />
            </>
        );
    }
}

export default Trade;