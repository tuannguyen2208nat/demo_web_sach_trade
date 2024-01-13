import React from "react";
import { toast } from 'react-toastify';

class TradeSearch extends React.Component {
    state = {
        book: '',
        num: 0,
        check1: null,
        check2: null,
        button_on: false,
        trade_num: 0
    }

    handleChangeBook = (event) => {
        this.setState({
            book: event.target.value,
            check1: false
        });
    }

    handleSubmitChangeBook = () => {
        const { book } = this.props;
        const currBookName = this.state.book;
        const existingBook = book.find(item => item.book_name === currBookName);

        if (!currBookName) {
            toast.error(`Vui lòng nhập thông tin sách`);
            return;
        }

        if (existingBook) {
            this.setState({
                num: existingBook.book_num,
                check1: true,
                check2: true
            });
            this.props.handleSearchNameBook(currBookName);
        } else {
            this.setState({
                check1: false,
                check2: false
            });
            this.props.handleSearchNameBook('');
        }
        this.props.handleSearchBook();
    }

    render() {
        return (
            <div >
                <input
                    placeholder="Bạn muốn tìm sách gì ? "
                    type="text"
                    value={this.state.book}
                    onChange={this.handleChangeBook}
                    style={{ width: '670px', height: '27px', borderRadius: '5px', fontSize: '20px' }}
                />
                &nbsp;
                <button style={{ cursor: 'pointer', width: '60px', height: '30px', borderRadius: '5px' }} onClick={this.handleSubmitChangeBook}>Tìm</button>
            </div>
        );
    }
}

export default TradeSearch;
