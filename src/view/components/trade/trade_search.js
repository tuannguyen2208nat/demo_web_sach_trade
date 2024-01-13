import React from "react";
import { toast } from 'react-toastify';

class TradeSearch extends React.Component {
    state = {
        book: '',
    }

    handleChangeBook = (event) => {
        this.setState({
            book: event.target.value,
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
            this.props.handleSearchNameBook(currBookName);
        } else {
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
                    style={{ width: '670px', height: '27px', borderRadius: '39px', fontSize: '20px' }}
                />
                &nbsp;
                <button style={{ cursor: 'pointer', width: '60px', height: '30px', borderRadius: '100px' }} onClick={this.handleSubmitChangeBook}>Tìm</button>
            </div>
        );
    }
}

export default TradeSearch;
