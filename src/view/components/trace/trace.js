import React from "react";
import Trace_input from "./trace_input";
import Trace_buy from "./trace_buy";

class Trace extends React.Component {
    state = {
        book: [
            { book_name: '', book_num: '' }
        ]
    }

    addBook = (val_name) => {
        const existingBook = this.state.book.find(book => book.book_name === val_name);

        if (existingBook) {
            existingBook.book_num = parseInt(existingBook.book_num, 10) + 1;
            alert(`Tên sách: ${existingBook.book_name}, Số lượng sách: ${existingBook.book_num}`);
        }
        else {
            alert('Không có')
        }
    }

    buyBook = () => {

    }


    render() {
        return (
            <>
                <Trace_input
                    addBook={this.addBook}
                />
                <Trace_buy
                    book={this.book}
                    buyBook={this.buyBook}
                />
            </>
        );
    }
}

export default Trace;