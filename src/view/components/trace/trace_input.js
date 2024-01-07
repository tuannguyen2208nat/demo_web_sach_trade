import React from "react";
import { toast } from 'react-toastify';

class TraceInput extends React.Component {
    state = {
        book: '',
        num: '',
        check: null
    }

    handleChangeBook = (event) => {
        this.setState({
            book: event.target.value
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
                check: true
            });
        } else {
            this.setState({
                check: false
            });
        }

        this.setState({
            book: '',
            num: ''
        });
    }

    render() {
        return (
            <>
                <div className="first">
                    Sách muốn tìm
                </div>
                <div className="second">
                    <input
                        type="text"
                        value={this.state.book}
                        onChange={this.handleChangeBook}
                    />
                    &nbsp;
                    <button onClick={this.handleSubmitChangeBook}>Tìm</button>
                </div>
                <div className="third">
                    {this.state.check === true && (
                        <div>
                            Tên sách : {this.state.book}- , số lượng : {this.state.num} cuốn
                        </div>
                    )}
                    {this.state.check === false && (
                        <div>
                            Không có dữ liệu
                        </div>
                    )}
                </div>
            </>
        );
    }
}

export default TraceInput;
